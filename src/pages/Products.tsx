import React from 'react';
import CustomTable from '../components/Table';
import { HeadCell } from '../types/table';



const Products: React.FC = ( )=> {

  const initialState = [

    { "id": 1, "title": "Pierwszy produkt", "price": 15000, "description": "Opis proiduktu", "published": true, "createdAt": "2022-02-06T14:20:02.000Z", "updatedAt": "2022-02-06T14:20:02.000Z" }
    ,

    { "id": 2, "title": "Drugi produkt", "price": 15555, "description": "First Prod", "published": false, "createdAt": "2022-02-13T19:48:48.000Z", "updatedAt": "2022-02-13T19:48:48.000Z" }
    ,

    { "id": 3, "title": "Trzeci produkt", "price": 15551412, "description": "Sec Prod", "published": false, "createdAt": "2022-02-13T19:49:04.000Z", "updatedAt": "2022-02-13T19:49:04.000Z" }
  ,  

  ]

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
      <CustomTable headCells={headCells} data={initialState}/>
    </section>
  );
};

export default Products;