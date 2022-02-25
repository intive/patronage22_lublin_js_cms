import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
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
import axios from "axios";
import getCategories from "../../lib/categories";
import { CONSTANTS } from "../../types/constants";
import statuses from "../../types/statuses";

interface MyFormValues {
  title: string;
  category: string;
  description: string;
  photo: any;
  price: number | null;
  quantity: number;
  status: string;
  published: boolean;
}

interface ProductProps {
  onAddProduct: (product: any) => void;
}

const AddProduct: React.FC<ProductProps> = ({ onAddProduct }) => {
  const [categories, setCategories] = useState<any[]>([]);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<any>(null);
  const [quantity, setQuantity] = useState(0);
  const [status, setStatus] = useState("");
  const [published, setPublished] = useState(false);

  const handleChange = () => {
    setPublished(!published);
  };

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

  const uploadFileHandler = async (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const formData = new FormData();
    formData.append("image", file);
    formData.append("product_id", "1");
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post(
        `${CONSTANTS.URL}/api/photos`,
        formData,
        config
      );
      setImage(data);
    } catch (error) {
      console.error(error);
    }
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const product = {
      title,
      category,
      description,
      photo: image,
      price: price.toFixed(2),
      quantity,
      status,
      published,
    };
    onAddProduct(product);
    console.log("Submitted", product);
    setCategory("");
    setTitle("");
    setDescription("");
    setImage("");
    setPrice(null);
    setQuantity(0);
    setStatus("");
    setPublished(false);
  };

  const initialValues: MyFormValues = {
    title: "",
    category: "",
    description: "",
    photo: "",
    price: null,
    quantity: 0,
    status: "",
    published: false,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      <Form onSubmit={submitHandler} className={classes.form}>
        <h1>Add Product</h1>
        <FormControl>
          <FormLabel htmlFor="title">Title</FormLabel>
          <TextField
            id="title"
            type="text"
            name="title"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormControl>
        <Box sx={{ minWidth: 420 }}>
          <FormControl fullWidth>
            <FormLabel htmlFor="demo-simple-select">Select Category</FormLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
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
            name="description"
            placeholder="Enter description"
            value={description}
            rows={4}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </FormControl>
        <FormControl>
          <Stack
            direction="column"
            alignItems="left"
            spacing={1}
            className={classes.stack}
          >
            <FormLabel htmlFor="contained-button-file">Select Image</FormLabel>

            <input
              id="contained-button-file"
              onChange={uploadFileHandler}
              accept="image/*"
              type="file"
              name="file"
            />
          </Stack>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="price">Price</FormLabel>
          <TextField
            id="price"
            type="number"
            name="price"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
            InputProps={{
              inputProps: {
                max: 100000.0,
                min: 10.0,
              },
            }}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="quantity">Quantity</FormLabel>
          <TextField
            id="quantity"
            type="number"
            name="quantity"
            placeholder="Enter quantity"
            value={quantity}
            onChange={(e) => setQuantity(+e.target.value)}
            InputProps={{
              inputProps: {
                max: 100,
                min: 1,
              },
            }}
            required
          />
        </FormControl>
        <Box sx={{ minWidth: 420 }}>
          <FormControl fullWidth>
            <FormLabel htmlFor="demo-simple-select-status">
              Select Status
            </FormLabel>
            <Select
              labelId="demo-simple-select-label-status"
              id="demo-simple-select-status"
              value={status}
              label="Status"
              onChange={(e) => setStatus(e.target.value)}
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
            control={<Checkbox onChange={handleChange} />}
            label="Published"
          />
        </FormControl>
        <Button type="submit" variant="contained">
          Add Product
        </Button>
      </Form>
    </Formik>
  );
};

export default AddProduct;
