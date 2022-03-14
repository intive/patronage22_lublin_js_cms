import React from "react";
import EditCategoryValidation from "./validation";
import { useFormik }  from "formik";
import { Button } from "@material-ui/core";
import classes from "../EditCategoryForm/EditCategoryForm.module.css";
import { Container, Grid, Typography, TextField } from "@mui/material";

type FormProps = {
    title: String;
    description: String;
};
 
const EditCategoryForm = ({title, description }: FormProps) => {
    const initialFormValues = {
        title: title,
        description: description
    };

    const formik = useFormik({
        initialValues: initialFormValues,
             
        onSubmit: (values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
        },

        validationSchema: EditCategoryValidation
    });

    const { handleSubmit, handleChange, getFieldProps} = formik;

    return (
        <Container className={classes.editForm} >
            <form onSubmit={handleSubmit} >
                <Grid container rowSpacing={4}>
                    <Grid item className={classes.gridItem}>
                        <Typography variant="h4">Edit Category</Typography>
                    </Grid>

                    <Grid item xs={10} className={classes.gridItem}>
                        <TextField
                            {...getFieldProps('title')}
                            id="title"
                            label="New Title"
                            variant="outlined"
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={10} className={classes.gridItem}>
                        <TextField
                            {...getFieldProps('description')}
                            id="description"
                            label="Description"
                            variant="outlined"
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={10}>
                        <Button variant="contained" type="submit" className={classes.editButton}>Edit</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};
 
export default EditCategoryForm;