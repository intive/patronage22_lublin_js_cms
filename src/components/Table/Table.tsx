import React, { useState } from 'react';
import { Product } from '../../types/table';
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

const Table = () => {
  const [products] = useState<Product[]>(initialState);
  return <CustomTable data={products} />;
};

export default Table;
