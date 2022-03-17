import React from "react";
import { Formik, Form } from "formik";
import { Container, Grid, Typography } from "@mui/material";
import TextfieldWrapper from "../Textfield/TextfieldWrapper";
import SelectWrapper from "../Select/SelectWrapper";
import ButtonWrapper from "../Button/ButtonWrapper";
import SwitchWrapper from "../Switch/SwitchWrapper";
import classes from "../EditProductForm/EditProductForm.module.css";
import { FORM_VALIDATION } from "./validate";
import { editProductRequest } from "../../components/lib/products";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../types/routes";

type EditProductFormProps = {
  product: any;
  categories: any;
};

export const EditProductForm: React.FC<EditProductFormProps> = ({
  product,
  categories,
}) => {
  
  const history = useHistory();

  const INITIAL_FORM_STATE = { ...product };
  return (
    <Container className={classes.container}>
      <Formik
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          console.log(values);

          editProductRequest(values, values.id)
            .then((response) => {
              console.log(response);
              history.push(ROUTES.PRODUCTS);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        {(props) => (
          <Form>
            <Grid container className={classes.gridContainer}>
              <Grid item>
                <Typography variant="h4">Edit product Form</Typography>
              </Grid>

              <Grid item xs={12}>
                <TextfieldWrapper name="title" label="Title" />
              </Grid>

              <Grid item xs={12}>
                <SelectWrapper
                  name="category"
                  label="Categories"
                  options={categories}
                />
              </Grid>

              <Grid item xs={12}>
                <TextfieldWrapper name="price" label="Price" />
              </Grid>

              <Grid item xs={12}>
                <TextfieldWrapper name="quantity" label="Quantity" />
              </Grid>

              <Grid item xs={6}>
                <SwitchWrapper
                  name="status"
                  legend="Status"
                  label={props.values.status ? "Available" : "Unavailable"}
                />
              </Grid>

              <Grid item xs={6}>
                <SwitchWrapper
                  name="published"
                  legend="Published"
                  label={props.values.published ? "Published" : "Unpublished"}
                  ifChecked={props.values.published}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6">Description</Typography>
              </Grid>

              <Grid item xs={12}>
                <TextfieldWrapper
                  name="description"
                  label="Description..."
                  multiline={true}
                  rows={5}
                />
              </Grid>

              <Grid item xs={12}>
                <ButtonWrapper>Edit Product</ButtonWrapper>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
