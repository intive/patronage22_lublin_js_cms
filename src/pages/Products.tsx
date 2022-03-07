import React, { useState, useEffect } from 'react';
import CustomTable from '../components/Table';
import { HeadCell } from '../types/table';
import {getProducts} from '../components/lib/products';


const Products: React.FC = ( )=> {
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
      <CustomTable headCells={headCells} data={products}/>
    </section>
  );
};

export default Products;