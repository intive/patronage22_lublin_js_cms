import React, { useContext } from "react";
import AuthContext from "../store/auth-context";
import AddProductForm from "../components/Product/AddProductForm";
import addProductRequest from "../components/lib/addProduct";

const AddProduct = () => {
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  const addProductHandler = (product: any) => {
    addProductRequest(product, token)
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
