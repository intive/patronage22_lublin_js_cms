import React from "react";
import AddProductForm from "../components/AddProductForm";
import addProductRequest from "../components/lib/addProduct";

const AddProduct = () => {
  const addProductHandler = (product: any) => {
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
