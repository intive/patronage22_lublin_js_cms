import React from "react";
import EditCategoryValidation from "./validation";
import { TextField } from "@mui/material";
import { useFormik }  from "formik";
import { Checkbox, FormControlLabel, Button } from "@material-ui/core";

type FormProps = {
    id: String;
    //title: String;
    //description: String;
}
 
const EditCategoryForm = ({ id/*, title, description*/ }: FormProps) => {
    const initialFormValues = {
        id: '',
        title: '',
        description: ''
    };

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
                onChange={handleChange}
            />

            <TextField
                {...formik.getFieldProps('description')}
                label="Description"
                variant="outlined"
                onChange={handleChange}
            />
                
            <Button variant="contained" type="submit">Edit</Button>
        </form> 
    )
}
 
export default EditCategoryForm;