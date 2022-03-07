import React from "react";
import { Form, useFormik }  from "formik";
import { Checkbox, FormControlLabel, Button, TextField } from "@material-ui/core";
import EditCategoryValidation from "./validation";

type FormProps = {
    id: String
}
 
const EditCategoryForm = ({ id }: FormProps) => {
        const initialFormValues = {title: String};

        const formik = useFormik({
            initialValues: {initialFormValues},
             
            onSubmit: (values, actions) => {
                console.log({ values, actions });
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
            },

            validationSchema: { EditCategoryValidation }
        })

        const { handleSubmit, handleChange } = formik;

    return (
        <form onSubmit={handleSubmit}>
            <TextField 
                {...formik.getFieldProps('title')}
                label="New Title" 
                variant="outlined" 
            />

            <FormControlLabel
                {...formik.getFieldProps('button')}
                control={<Checkbox />} 
                label="Published"
                labelPlacement="bottom"
            />

            <Button variant="contained" onChange={handleChange}>Edit</Button>
        </form>
    )
}
 
export default EditCategoryForm;