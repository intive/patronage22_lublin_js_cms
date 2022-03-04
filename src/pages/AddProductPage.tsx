import React, { useContext } from "react";
import AuthContext from "../store/auth-context";
import AddProduct from "../components/Product/AddProduct";
import addProductRequest from "../components/lib/addProduct";

const AddProductPage = () => {
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
      <AddProduct onAddProduct={addProductHandler} />
    </section>
  );
};

export default AddProductPage;
