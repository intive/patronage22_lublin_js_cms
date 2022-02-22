import React from "react";
import { Form, useFormik , Formik } from "formik";
import { Checkbox, FormControlLabel, Button, TextField } from "@material-ui/core";
import * as Yup from "yup";

const EditCatForm = (props: String) => {

    const EditCategoryValidation = Yup.object().shape({
        title: Yup.string()
        .min(2, "Title mush have at least 2 characters")
        .max(20, "Title must have less than 20 characters")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field")
    });

        const formik = useFormik({
            initialValues: { title: {props.title} },
            
            onSubmit: (values, actions) => {
                console.log({ values, actions });
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
            },

            validationSchema: { EditCategoryValidation }
        })

    return (
        <Form onSubmit={formik.handleSubmit}>
            <TextField 
                id="outlined-basic" 
                label="New Title" 
                variant="outlined" 
                name="title" 
                onChange={formik.handleChange}
                required
            />

            <FormControlLabel
                value="bottom"
                control={<Checkbox />} 
                label="Published"
                labelPlacement="bottom"
                onChange={formik.handleChange}
            />

            <Button variant="contained" onChange={formik.handleChange}>Add</Button>
        </Form>
    )
}
 
export default EditCatForm;