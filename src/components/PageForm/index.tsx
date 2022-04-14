import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SaveIcon from "@mui/icons-material/Save";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import styles from "../CategoryForm/index.module.css";
import { addPageRequest } from "../lib/pages";
import classes from "../Layout/AuthLayout/AuthLayout.module.css";
import { CONSTANTS } from "../../types/constants";

interface FormValues {
  title: string;
  description: string;
}

const PageForm: React.FC = () => {
  const history = useHistory();
  const InitialValuesForm: FormValues = {
    title: "",
    description: "",
  };

  const validationSchema = yup.object({
    title: yup
      .string()
      .min(2, "Title should be of minimum 2 characters length")
      .max(20, "Title should be of maximun 20 characters length")
      .required("Title is required")
      .matches(/^[^\s].+[^\s]$/, "No white space in the beginning"),
    description: yup
      .string()
      .matches(/^[^\s].+[^\s]$/, "No white space in the beginning")
      .min(25, "Description should be of minimum 25 characters length")
      .max(100, "Description should be of maximum 100 characters length")
      .required("Description is required"),
  });

  // const formik = useFormik({
  //   initialValues: InitialValuesForm,
  //   validationSchema,
  //   onSubmit: (values) => {
  //     const payload = { ...values };
  //     addPageRequest(payload);
  //     history.push("/pages");
  //   },
  // });

  const formik = useFormik({
    initialValues: InitialValuesForm,
    onSubmit(values) {
      const payload = { ...values };
      console.log(payload);
      addPageRequest(payload)
        .then((response) => {
          console.log(response.data);
          if (response.status === CONSTANTS.RESPONSE_SUCCESS) {
            history.push("/pages");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    validationSchema,
  });

  const handleClose = () => {
    history.push("/pages");
  };

  const { handleSubmit, getFieldProps, errors } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <Box className={styles.background}>
        <Typography variant="h6" component="h2">
          Add new page
        </Typography>
        <Grid pt={2} item xs={6}>
          <TextField fullWidth label="Title" {...getFieldProps("title")} />
          {errors.title ? <div>{errors.title}</div> : null}
        </Grid>
        <Grid pt={2} item xs={6}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Description"
            {...getFieldProps("description")}
          />
          {errors.description ? <div>{errors.description}</div> : null}
        </Grid>
        <Grid pt={5}>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
        </Grid>
      </Box>
    </form>
  );
};

export default PageForm;
