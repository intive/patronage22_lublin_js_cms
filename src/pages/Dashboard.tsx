import React, { useState, useEffect } from "react";
import CustomTable from "../components/Table";
import { HeadCell, Product } from "../types/table";
import {getProducts} from "../components/lib/products";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { ROUTES } from "../types/routes";
import classes from '../components/Layout/Layout.module.css'

const Dashboard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response.data.slice(-10));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const headCells: HeadCell[] = [
    {
      id: 'id',
      numeric: true,
      label: 'ID',
    },
    {
      id: 'title',
      numeric: false,
      label: 'TITLE',
    },
    {
      id: 'price',
      numeric: true,
      label: 'PRICE',
    },
    {
      id: 'published',
      numeric: false,
      label: 'PUBLISHED',
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
        <Link to={ROUTES.ADD_PRODUCT} className={classes.link}>
           <AddIcon /> Add Product
        </Link>
      </Button>
      <Button type="submit" variant="contained">
        <Link to={ROUTES.CATEGORY_ADD} className={classes.link}>
           <AddIcon /> Add Category
        </Link>
      </Button>
      <CustomTable headCells={headCells} data={products} disablePagination={true} />
    </section>
  );
};

export default Dashboard;
