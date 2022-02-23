import React from "react";
import { Form, useFormik, Formik }  from "formik";
import { Checkbox, FormControlLabel, Button, TextField } from "@material-ui/core";
import EditCategoryValidation from "./validation"

const EditCatForm = (props: String) => {
        const initialFormValues = {title: {props.title}};

        const formik = useFormik({
            initialValues: {initialFormValues},
            
            onSubmit: (values, actions) => {
                console.log({ values, actions });
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
            },

            validationSchema: { EditCategoryValidation }
        })

        const formikHandlers = {
            submitHandler: formik.handleSubmit,
            changeHandler: formik.handleChange
        }

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