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
import uploadRequest from "../lib/uploadImage";
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
  const initialState = {
    category: "",
    image: "",
    title: "",
    description: "",
    price: "",
    quantity: 0,
    status: "",
    published: false,
  };

  const [categories, setCategories] = useState<any[]>([]);
  const [formData, setFormData] = useState(initialState);

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
    uploadRequest(formData)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setFormData((prevState) => ({
            ...prevState,
            image: response.data,
          }));
        } else {
          throw new Error("Authenfication Fail!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const initialValuesData: MyFormValues = {
    title: "",
    category: "",
    description: "",
    photo: "",
    price: null,
    quantity: 0,
    status: "",
    published: false,
  };

  const formik = useFormik({
    initialValues: { initialValuesData },

    onSubmit(values) {
      // This will run when the form is submitted
      console.log(values);

      const product = {
        title: formData.title,
        category: formData.category,
        description: formData.description,
        photo: formData.image,
        price: +formData.price,
        quantity: formData.quantity,
        status: formData.status,
        published: formData.published,
      };
      onAddProduct(product);
      console.log("Submitted", product);
      setFormData(initialState);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <h1>Add Product</h1>
      <FormControl>
        <FormLabel htmlFor="title">Title</FormLabel>
        <TextField
          id="title"
          type="text"
          name="title"
          placeholder="Enter title"
          value={formData.title}
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              title: e.target.value,
            }))
          }
          required
        />
      </FormControl>
      <Box sx={{ minWidth: 420 }}>
        <FormControl fullWidth>
          <FormLabel htmlFor="demo-simple-select">Select Category</FormLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData.category}
            label="Category"
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                category: e.target.value,
              }))
            }
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
          value={formData.description}
          rows={4}
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              description: e.target.value,
            }))
          }
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
          type="text"
          name="price"
          placeholder="Enter price"
          value={formData.price}
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              price: e.target.value,
            }))
          }
          InputProps={{
            inputProps: {
              maxLength: 9,
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
          value={formData.quantity}
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              quantity: +e.target.value,
            }))
          }
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
            value={formData.status}
            label="Status"
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                status: e.target.value,
              }))
            }
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
              onChange={() =>
                setFormData((prevState) => ({
                  ...prevState,
                  published: !formData.published,
                }))
              }
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
