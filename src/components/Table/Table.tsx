import React, { useState } from 'react';
import { HeadCell, Product } from '../../types/table';
import CustomTable from './CustomTable';

const initialState = [
  {
    id: 1,
    title: 'First Product',
    price: 10000,
    description: 'First Product description...',
    published: true,
  },
  {
    id: 2,
    title: 'Second Product',
    price: 2000,
    description: 'Second Product description...',
    published: false,
  },
  {
    id: 3,
    title: 'Third Product',
    price: 3000,
    description: 'Third Product description...',
    published: true,
  },
];

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
    id: 'description',
    numeric: false,
    label: 'DESCRIPTION',
  },
  {
    id: 'published',
    numeric: false,
    label: 'PUBLISHED',
  },
];

const Table = () => {
  const [products] = useState<Product[]>(initialState);
  return <CustomTable headCells={headCells} data={products} />;
};

export default Table;
