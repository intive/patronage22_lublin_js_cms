import * as Yup from "yup";


export const FORM_VALIDATION = Yup.object().shape({
    title: Yup.string()
      .max(50, "Max number of characters is 50")
      .required("Required"),
    category: Yup.string()
      .required("Required"),
    quantity: Yup.number()
      .integer()
      .min(0, "Quantity can not be negative")
      .max(10000, "Max 10000")
      .typeError("Quantity must be an integer")
      .required("Required"),
    description: Yup.string()
      .min(25, "Min number of characters is 25")
      .required("Required"),
    status: Yup.boolean()
      .oneOf([true, false], "Invalid value")
      .required("Required"),
    published: Yup.boolean()
      .oneOf([true, false], "Invalid value")
      .required("Required"),
  });