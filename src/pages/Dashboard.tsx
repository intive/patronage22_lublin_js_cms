import React, { useState, useEffect } from "react";
import CustomTable from "../components/Table";
import { HeadCell } from "../types/table";
import getProducts from "../components/lib/products";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { ROUTES } from "../types/routes";
import classes from "../components/Layout/Layout.module.css";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      id: "published",
      numeric: false,
      label: "PUBLISHED",
    },
    {
      id: 'createdAt',
      numeric: true,
      label: 'CREATED',
    },
    {
      id: 'updatedAt',
      numeric: false,
      label: '',
    },
  ];
  return (
    <section>
      <Button type="submit" variant="contained">
        <Link className={classes.link} to={ROUTES.ADD_PRODUCT}>
          <AddIcon /> Add Product
        </Link>
      </Button>
      <CustomTable headCells={headCells} data={products} />
    </section>
  );
};

export default Dashboard;
