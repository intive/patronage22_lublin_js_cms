import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  Box,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Stack,
} from "@mui/material";
import classes from "../Layout/AuthLayout/AuthLayout.module.css";
import getCategories from "../lib/categories";
import statuses from "../../types/statuses";
import getPhotos from "../lib/photos";
import uploadRequest from "../lib/uploadImage";
import AcceptMaxFiles from "../Dropzone/AcceptMaxFiles";

interface MyFormValues {
  title: string;
  category: string;
  description: string;
  photos: any[];
  price: number | null;
  quantity: number;
  status: string;
  published: boolean;
}

interface ProductProps {
  onAddProduct: (product: any) => void;
}

const AddProduct: React.FC<ProductProps> = ({ onAddProduct }) => {
   
  const initialValuesForm: MyFormValues = {
    title: "",
    category: "",
    description: "",
    photos: [],
    price: null,
    quantity: 0,
    status: "",
    published: false,
  };

  const [categories, setCategories] = useState<any[]>([]);
  const [formData, setFormData] = useState<any>();

  useEffect(() => {
    getCategories()
      .then((response) => {
        console.log(response);
        const data = response.data;
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getPhotos()
      .then((response) => {
        console.log(response);
        const data = response.data;
        // setFormData((prevState) => ({
        //   ...prevState,
        //   images: data,
        // }));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const uploadFileHandler = async (event: React.ChangeEvent) => {


    // Here add all list of photos to this state setFormData

    // const target = event.target as HTMLInputElement;
    // const file: File = (target.files as FileList)[0];
    // const formData = new FormData();
    // formData.append("image", file);
    // formData.append("product_id", "1");
    // uploadRequest(formData)
    //   .then((response) => {
    //     if (response.status === 200) {
    //       console.log(response.data);
    //     } else {
    //       throw new Error("Authenfication Fail!");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // getPhotos();
  };

  

  const formik = useFormik({
    initialValues: initialValuesForm,

    onSubmit(values) {
      // This will run when the form is submitted

      // Here add formData.photos to the values -> const payload = {...values, photos: formData.photos}

      console.log(values, 'payload values');

      // const product = {
      //   title: formData.title,
      //   category: formData.category,
      //   description: formData.description,
      //   photo: formData.images,
      //   price: +formData.price,
      //   quantity: formData.quantity,
      //   status: formData.status,
      //   published: formData.published,
      // };
      // onAddProduct(product);
      // console.log("Submitted", product);
      // setFormData(initialState);
      // getPhotos();
    },
  });

  const {handleSubmit, getFieldProps} = formik;

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <h1>Add Product</h1>
      <FormControl>
        <FormLabel htmlFor="title">Title</FormLabel>
        <TextField
          id="title"
          type="text"
          placeholder="Enter title"
          {...getFieldProps('title')}
        />
      </FormControl>
      <Box sx={{ minWidth: 420 }}>
        <FormControl fullWidth>
          <FormLabel htmlFor="demo-simple-select">Select Category</FormLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
            {...getFieldProps('category')}
          >
            {categories.map((item) => (
              <MenuItem key={item.id} value={item.title}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <FormControl>
        <FormLabel htmlFor="description">Description</FormLabel>
        <TextField
          id="description"
          multiline
          placeholder="Enter description"
          rows={4}
          {...getFieldProps('description')}
        />
      </FormControl>
      <FormControl>
        <Stack
          direction="column"
          alignItems="left"
          spacing={1}
          className={classes.stack}
        >
          <FormLabel
            htmlFor="contained-button-file"
            style={{ marginTop: "1rem" }}
          >
            Select Multiple images
          </FormLabel>
          <AcceptMaxFiles />
        </Stack>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="price">Price</FormLabel>
        <TextField
          id="price"
          type="text"
          placeholder="Enter price"
          {...getFieldProps('price')}
          InputProps={{
            inputProps: {
              maxLength: 9,
            },
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="quantity">Quantity</FormLabel>
        <TextField
          id="quantity"
          type="number"
          placeholder="Enter quantity"
          {...getFieldProps('quantity')}
          InputProps={{
            inputProps: {
              max: 100,
              min: 1,
            },
          }}
        />
      </FormControl>
      <Box sx={{ minWidth: 420 }}>
        <FormControl fullWidth>
          <FormLabel htmlFor="select-status">
            Select Status
          </FormLabel>
          <Select
            labelId="select-label-status"
            id="select-status"
            {...getFieldProps('status')}
          >
            {statuses.map((item) => (
              <MenuItem key={item.id} value={item.status}>
                {item.status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <FormControl>
        <FormControlLabel
          control={
            <Checkbox
              {...getFieldProps('published')}
            />
          }
          label="Published"
        />
      </FormControl>
      <Button type="submit" variant="contained">
        Add Product
      </Button>
    </form>
  );
};

export default AddProduct;
