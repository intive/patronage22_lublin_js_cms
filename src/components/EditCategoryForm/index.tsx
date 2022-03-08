import React from "react";
import EditCategoryValidation from "./validation";
import TextfieldWrapper from "../Textfield/TextfieldWrapper";
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

    const { handleSubmit } = formik;

    return (
        <form onSubmit={handleSubmit}>
            <TextfieldWrapper
                {...formik.getFieldProps('title')}
                label="New Title"
            />

            <TextfieldWrapper
                {...formik.getFieldProps('description')}
                label="Description"
                multiline={true}
                rows={2}
            />
                
            <FormControlLabel
                {...formik.getFieldProps('button')}
                control={<Checkbox />} 
                label="Published"
                labelPlacement="bottom"
            />
                
            <Button variant="contained" type="submit">Edit</Button>
        </form> 
    )
}
 
export default EditCategoryForm;