import React from 'react';
import CustomTable from '../components/Table';
import { HeadCell } from '../types/table';

const Dashboard: React.FC = () => {
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
  return (
    <section>
      <CustomTable headCells={headCells} data={initialState} />
    </section>
  );
};

export default Dashboard;
