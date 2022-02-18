import React from "react";
import { Formik } from "formik";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";

const EditCatForm = () => {
    return (
        <Formik
            initialValues={{title: ''}}
            onSubmit={(values, actions) => {
                console.log({ values, actions });
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
            }}
        >
            <TextField id="outlined-basic" label="New Title" variant="outlined" />
            
            <FormControlLabel
                value="bottom"
                control={<Checkbox />}
                label="Published"
                labelPlacement="bottom"
            />

            <Button variant="contained">Add</Button>
        </Formik>
    )
}

export default EditCatForm;