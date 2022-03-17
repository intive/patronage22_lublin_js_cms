import React, { useState, useEffect } from "react";
import CustomTable from "../components/Table";
import { CustomRowProps, HeadCell, Product } from "../types/table";
import {getProducts} from "../components/lib/products";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { ROUTES } from "../types/routes";
import classes from '../components/Layout/Layout.module.css'
import ProductRow from "../components/Table/ProductRow";
import { Typography } from '@mui/material';

const Dashboard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response.data.slice(-6));
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
       <Typography variant="h4" p={2} sx={{ color: '#0f0f0f' }}>
        Products
      </Typography>
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
      <CustomTable customRow={(props: CustomRowProps) => <ProductRow  {...props}/>} headCells={headCells} data={products} disablePagination={true} />
    </section>
  );
};

export default Dashboard;
