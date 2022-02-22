import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../store/auth-context";
import axios from "axios";
import CustomTable from "../components/Table";
import { HeadCell } from "../types/table";
import AddProduct from "../components/Product/AddProduct";
import getProducts from "../components/lib/products";
import { CONSTANTS } from "../types/constants";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    getProducts(token)
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

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

  const headCells: HeadCell[] = [
    {
      id: "id",
      numeric: true,
      label: "ID",
    },
    {
      id: "title",
      numeric: false,
      label: "TITLE",
    },
    {
      id: "price",
      numeric: true,
      label: "PRICE",
    },
    {
      id: "description",
      numeric: false,
      label: "DESCRIPTION",
    },
    {
      id: "published",
      numeric: false,
      label: "PUBLISHED",
    },
  ];
  return (
    <section>
      <CustomTable headCells={headCells} data={products} />
      <AddProduct onAddProduct={addProductRequest} />
    </section>
  );
};

export default Dashboard;
