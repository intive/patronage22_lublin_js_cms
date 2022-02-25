import React, { useContext } from "react";
import AuthContext from "../store/auth-context";
import axios from "axios";
import AddProduct from "../components/Product/AddProduct";
import { CONSTANTS } from "../types/constants";

const ProductsPage = () => {
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  const addProductRequest = async (product: any) => {
    const response = axios(`${CONSTANTS.URL}/api/products/addProduct`, {
      method: "POST",
      data: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log((await response).data);
  };

  return (
    <section>
      <AddProduct onAddProduct={addProductRequest} />
    </section>
  );
};

export default ProductsPage;
