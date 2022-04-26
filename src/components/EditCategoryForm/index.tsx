import React from "react";
import { useFormik } from "formik";
import { Button } from "@material-ui/core";
import { Container, Grid, Typography, TextField } from "@mui/material";
import classes from "./styles.module.css";
import { EditCategoryValidation } from "./validation";

type FormProps = {
  title: string;
  description: string;
  onSubmit: (formValues: { title: string; description: string }) => void;
};

function EditCategoryForm({ title, description, onSubmit }: FormProps) {
  const initialFormValues = {
    title,
    description,
  };
  const formik = useFormik({
    initialValues: initialFormValues,
    onSubmit: (values) => {
      onSubmit(values);
    },
    enableReinitialize: true,
    validationSchema: EditCategoryValidation,
    validateOnChange: true,
  });

  const { handleSubmit, handleChange, handleBlur } = formik;

  return (
    <Container className={classes.editForm}>
      <form onSubmit={handleSubmit}>
        <Grid container rowSpacing={4} className={classes.gridContainer}>
          <Grid item className={classes.gridItem}>
            <Typography variant="h4">Edit Category</Typography>
          </Grid>

          <Grid item xs={12} className={classes.gridItem}>
            <TextField
              name="title"
              label="New Title"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formik.values.title}
              error={Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} className={classes.gridItem}>
            <TextField
              name="description"
              label="Description"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formik.values.description}
              error={Boolean(formik.errors.description)}
              helperText={
                formik.touched.description && formik.errors.description
              }
              fullWidth
            />
          </Grid>

          <Grid item xs={10}>
            <Button
              variant="contained"
              type="submit"
              className={classes.editButton}
            >
              Edit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default EditCategoryForm;
