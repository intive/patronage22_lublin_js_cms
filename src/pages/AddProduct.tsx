import React from "react";
import AddProductForm from "../components/AddProductForm";
import {addProductRequest} from "../components/lib/products";

const AddProduct = () => {
  const addProductHandler = (product: {}) => {
    addProductRequest(product)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section>
      <AddProductForm onAddProduct={addProductHandler} />
    </section>
  );
};

export default AddProduct;
