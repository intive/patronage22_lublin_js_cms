import React from "react";
import { Form, useFormik }  from "formik";
import { Checkbox, FormControlLabel, Button, TextField } from "@material-ui/core";
import EditCategoryValidation from "./validation"

type FormProps = {
    category: any
}
 
const EditCategoryForm = ({...category}: FormProps) => {
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
        <Form onSubmit={handleSubmit}>
            <TextField 
                id="outlined-basic" 
                label="New Title" 
                variant="outlined" 
                {...formik.getFieldProps('outlined-basic')}
                name="title"
                required
            />

            <FormControlLabel
                value="bottom"
                control={<Checkbox />} 
                label="Published"
                labelPlacement="bottom"
                onChange={handleChange}
            />

            <Button variant="contained" onChange={handleChange}>Edit</Button>
        </Form>
    )
}
 
export default EditCategoryForm;