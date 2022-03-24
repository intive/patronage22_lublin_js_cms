import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import {
  Container,
  Grid,
  Typography,
  Stack,
  FormLabel,
} from "@mui/material";
import TextfieldWrapper from "../Textfield/TextfieldWrapper";
import SelectWrapper from "../Select/SelectWrapper";
import ButtonWrapper from "../Button/ButtonWrapper";
import SwitchWrapper from "../Switch/SwitchWrapper";
import classes from "../EditProductForm/EditProductForm.module.css";
import { FORM_VALIDATION } from "./validate";
import { editProductRequest } from "../../components/lib/products";
import { getAllPhotosByProductId, deletePhoto } from "../lib/photos";
import uploadRequest from "../lib/uploadImage";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../types/routes";
import Dropzone from "../Dropzone";
import { CONSTANTS } from "../../types/constants";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";


type EditProductFormProps = {
  product: any;
  categories: any;
};

export const EditProductForm: React.FC<EditProductFormProps> = ({
  product,
  categories,
}) => {

  const [apiProductPhotos, setApiProductPhotos] = useState([]);
  const [photosData, setPhotosData] = useState<File[]>([]);

  const history = useHistory();

  useEffect(() => {
    getAllPhotosByProductId(product.id)
      .then((response) => {
        setApiProductPhotos(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteHandler = (id: number) => {
    deletePhoto(id)
      .then((response) => {
        const photosApiAfterDelete = apiProductPhotos.filter((photo: any) => {
          return photo.id !== id;
        });
        // console.log(photosApiAfterDelete);
        setApiProductPhotos(photosApiAfterDelete);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const INITIAL_FORM_STATE = { ...product };
  return (
    <Container className={classes.container}>
      <Formik
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          // console.log(values);

          editProductRequest(values, values.id)
            .then((response) => {
              console.log(response);
              if (response.status === CONSTANTS.RESPONSE_SUCCESS) {
                for (let i = 0; i < photosData.length; i++) {
                  const formData = new FormData();
                  formData.append("image", photosData[i]);
                  formData.append("product_id", `${values.id}`);
                  uploadRequest(formData)
                    .then((response) => {
                      if (response.status === CONSTANTS.RESPONSE_SUCCESS) {
                        console.log(response.data);
                      } else {
                        throw new Error("Something went wrong..");
                      }
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }
                history.push(ROUTES.PRODUCTS);
              }
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
                  label="Select Category"
                  options={categories}
                />
              </Grid>

              <Grid item container xs={12}>
                {apiProductPhotos.length === 0 ? (
                  <Grid item xs={12}>
                    <Typography variant="h6">No photos yet...</Typography>
                  </Grid>
                ) : (
                  apiProductPhotos.map((photo: any) => {
                    return (
                      <Grid
                        xs={6}
                        container
                        alignItems="center"
                        sx={{p:1}}
                      >
                        <img
                          src={`${CONSTANTS.URL}/` + photo.url}
                          width="150"
                          alt="product"
                          style={{ marginRight: "0.5rem" }}
                        />
                        <IconButton
                          onClick={() => deleteHandler(photo.id)}
                          aria-label="delete"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Grid>
                    );
                  })
                )}
              </Grid>

              <Stack direction="column" alignItems="left" spacing={1}>
                <FormLabel
                  htmlFor="contained-button-file"
                  style={{ marginTop: "1rem" }}
                >
                  Add Image/-s
                </FormLabel>
                <Dropzone setFilesList={setPhotosData} />
              </Stack>

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
