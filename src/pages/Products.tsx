import React, { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import CustomTable from "../components/Table";
import { CustomRowProps, HeadCell, Product } from "../types/table";
import { getProducts } from "../components/lib/products";
import ProductRow from "../components/Table/ProductRow";

import { ROUTES } from "../types/routes";
import classes from "../components/Layout/Layout.module.css";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
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
      id: "createdAt",
      numeric: true,
      label: "CREATED",
    },
    {
      id: "updatedAt",
      numeric: false,
      label: "",
    },
  ];
  return (
    <section>
      <Typography variant="h4" p={2} sx={{ color: "#0f0f0f" }}>
        Products
      </Typography>
      <Button type="submit" variant="contained">
        <Link to={ROUTES.ADD_PRODUCT} className={classes.link}>
          <AddIcon /> Add Product
        </Link>
      </Button>
      <CustomTable
        customRow={(props: CustomRowProps) => <ProductRow {...props} />}
        headCells={headCells}
        data={products}
      />
    </section>
  );
};

export default Products;
