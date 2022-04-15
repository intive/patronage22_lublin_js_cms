import * as Yup from "yup";

export const EditCategoryValidation = Yup.object().shape({
  title: Yup.string()
    .min(2, "Title mush have at least 2 characters")
    .max(20, "Title must have less than 20 characters")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field")
    .required("Required"),

  description: Yup.string()
    .min(2, "Description mush have at least 2 characters")
    .max(30, "Title must have less than 30 characters")
    .required("Required"),
});
