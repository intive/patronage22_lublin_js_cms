import React from "react";
import EditCategoryValidation from "./validation";
import TextfieldWrapper from "../Textfield/TextfieldWrapper";
import { Form, useFormik, Formik, FormikProps }  from "formik";
import { Checkbox, FormControlLabel, Button } from "@material-ui/core";

type FormProps = {
    id: String;
}
 
const EditCategoryForm = ({ id }: FormProps) => {
        const initialFormValues = {
            title: '',
            published: true
        };

        return (
            <Formik
                initialValues={initialFormValues}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
                validationSchema={EditCategoryValidation}
            >
                {(props: FormikProps<{title: string}>) => (
                    <Form onSubmit={props.handleSubmit}>
                        <TextfieldWrapper
                            {...props.getFieldProps('title')}
                            label="New Title"
                            name="title"
                        />
                
                        <FormControlLabel
                            {...props.getFieldProps('button')}
                            control={<Checkbox />} 
                            label="Published"
                            labelPlacement="bottom"
                            name="published"
                        />
                
                        <Button variant="contained" type="submit">Edit</Button>
                    </Form> 
                )}
            </Formik>
        )
}
 
export default EditCategoryForm;