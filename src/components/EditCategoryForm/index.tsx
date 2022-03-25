import React from "react";
import { EditCategoryValidation } from "./validation";
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

    const { handleSubmit, handleChange, handleBlur} = formik;
    
    return (
        <Container className={classes.editForm} >
            <form onSubmit={handleSubmit} >
                <Grid container rowSpacing={4}>
                    <Grid item className={classes.gridItem}>
                        <Typography variant="h4">Edit Category</Typography>
                    </Grid>

                    <Grid item xs={10} className={classes.gridItem}>
                        <TextField
                            name="title"
                            label="New Title"
                            variant="outlined"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={formik.values.title}
                            error={formik.errors.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                        />
                    </Grid>

                    <Grid item xs={10} className={classes.gridItem}>
                        <TextField
                            name="description"
                            label="Description"
                            variant="outlined"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={formik.values.description}
                            error={formik.errors.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
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