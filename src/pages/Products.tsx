import React, { useState, useEffect } from 'react';
import CustomTable from '../components/Table';
import { HeadCell, Product } from '../types/table';
import {getProducts} from '../components/lib/products';
import ProductRow from "../components/Table/ProductRow";
import { Typography } from '@mui/material';


const Products: React.FC = ( )=> {
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
      <CustomTable customRow={(props: any) => <ProductRow {...props}/>} headCells={headCells} data={products}/>
    </section>
  );
};

export default Products;