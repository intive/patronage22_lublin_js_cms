import React from "react";
import { useRef } from "react"; 
import { Formik, Form } from "formik";
import { Checkbox, FormControlLabel, Button, TextField } from "@material-ui/core";

const EditCatForm = (props: any) => {
    const titleRef useRef();
    
    const submitHandler = (event: any) => {
        event.preventDefault();

        const editedTitle = titleRef.current.value;
    }

    return (
        <Formik
            initialValues={{title: props.title}}

            onSubmit={(values, actions) => {
                console.log({ values, actions });
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
            }}
        >
            <Form onSubmit={submitHandler}>
                <TextField id="outlined-basic" label="New Title" variant="outlined" name="title" required ref={titleRef}/>
                
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