import React from 'react';
import CustomTable from '../components/Table';
import { HeadCell, Page } from '../types/table';
import PagesRow from "../components/Table/PagesRow";
import { Typography } from '@mui/material';

const Pages: React.FC = () => {
  const initialState = [
    {
      "id": 4,
      "title": "books",
      "description": "Enjoy reading books",
      "slug": "enjoy-reading-books",
      "createdAt": "2022-03-09T18:04:33.000Z",
      "updatedAt": "2022-03-09T18:04:33.000Z"
    },
    {
      "id": 5,
      "title": "music",
      "description": "Listening brand new record",
      "slug": "listening-brand-new-record",
      "createdAt": "2022-03-09T18:05:03.000Z",
      "updatedAt": "2022-03-09T18:05:03.000Z"
    },
    {
      "id": 6,
      "title": "paint",
      "description": "put the paint in the frame",
      "slug": "put-the-paint-in-the-frame",
      "createdAt": "2022-03-09T18:06:10.000Z",
      "updatedAt": "2022-03-09T18:06:10.000Z"
    },
    {
      "id": 7,
      "title": "paint",
      "description": "put another one paint in the frame",
      "slug": "put-another",
      "createdAt": "2022-03-09T18:07:53.000Z",
      "updatedAt": "2022-03-09T18:07:53.000Z"
    },
    {
      "id": 8,
      "title": "paint",
      "description": "put",
      "slug": "put",
      "createdAt": "2022-03-09T18:08:45.000Z",
      "updatedAt": "2022-03-09T18:08:45.000Z"
    },
    {
      "id": 9,
      "title": "paint",
      "description": "put second",
      "slug": "put-second",
      "createdAt": "2022-03-09T18:08:52.000Z",
      "updatedAt": "2022-03-09T18:08:52.000Z"
    },
    {
      "id": 10,
      "title": "paint",
      "description": "put second third",
      "slug": "put-second",
      "createdAt": "2022-03-09T18:08:57.000Z",
      "updatedAt": "2022-03-09T18:08:57.000Z"
    },
    {
      "id": 11,
      "title": "paint",
      "description": "put second third fourth",
      "slug": "put-second",
      "createdAt": "2022-03-09T18:09:10.000Z",
      "updatedAt": "2022-03-09T18:09:10.000Z"
    },
    {
      "id": 12,
      "title": "paint",
      "description": "fifth sixth",
      "slug": "fifth-sixth",
      "createdAt": "2022-03-09T18:09:31.000Z",
      "updatedAt": "2022-03-09T18:09:31.000Z"
    },
    {
      "id": 13,
      "title": "paint",
      "description": "fifth sixth seventh",
      "slug": "fifth-sixth-seventh",
      "createdAt": "2022-03-09T18:09:41.000Z",
      "updatedAt": "2022-03-09T18:09:41.000Z"
    },
    {
      "id": 14,
      "title": "paint",
      "description": "fifth sixth seventh eight",
      "slug": "fifth-sixth-seventh",
      "createdAt": "2022-03-09T18:09:47.000Z",
      "updatedAt": "2022-03-09T18:09:47.000Z"
    }
  ]

  const headCells: HeadCell[] = [
    {
      id: 'title',
      numeric: false,
      label: 'TITLE',
    },
    {
      id: 'slug',
      numeric: false,
      label: 'SLUG',
    },
  ];
  return (
    <section>
      <Typography variant="h4" p={2} sx={{ color: '#0f0f0f' }}>
        Pages
      </Typography>
      <CustomTable customRow={(props: Page) => <PagesRow row={undefined} key={0} {...props} />} headCells={headCells} data={initialState} disablePagination={true} />
    </section>
  );
};

export default Pages;
