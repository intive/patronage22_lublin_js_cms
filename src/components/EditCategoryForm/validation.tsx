import React from "react";
import * as Yup from "yup";

const EditCategoryValidation = Yup.object().shape({
    title: Yup.string()
    .min(2, "Title mush have at least 2 characters")
    .max(20, "Title must have less than 20 characters")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field")
    .required('Required')
});

export default EditCategoryValidation;