import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../store/auth-context";
import CustomTable from "../components/Table";
import { HeadCell } from "../types/table";
import getProducts from "../components/lib/products";

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
    </section>
  );
};

export default Dashboard;
