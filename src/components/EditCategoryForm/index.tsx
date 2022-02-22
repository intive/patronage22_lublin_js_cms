import React from "react";
import { useRef } from "react"; 
import { Formik, Form } from "formik";
import { Checkbox, FormControlLabel, Button, TextField } from "@material-ui/core";
import * as Yup from "yup";

const EditCatForm = (props: String) => {
    // const titleRef useRef();
    
    // const submitHandler = (event: { preventDefault: () => void; }) => {
    //     const editedTitle = titleRef.current.value;
    // }

    const EditCategoryValidation = Yup.object().shape({
        title: Yup.string()
        .min(2, "Title mush have at least 2 characters")
        .max(20, "Title must have less than 20 characters")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field")
    });

    return (
        <Formik
            initialValues={{title: props.title}}

            onSubmit={(values, actions) => {
                console.log({ values, actions });
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
            }}

            validationSchema = {EditCategoryValidation}
        >
            <Form onSubmit={submitHandler}>
                <TextField 
                    id="outlined-basic" 
                    label="New Title" 
                    variant="outlined" 
                    name="title" 
                    required 
                    ref={titleRef}
                />
                
                <FormControlLabel
                    value="bottom"
                    control={<Checkbox />} 
                    label="Published"
                    labelPlacement="bottom"
                />

                <Button variant="contained">Add</Button>
            </Form>
        </Formik>
    )
}
 
export default EditCatForm;