import React, { useState, useEffect } from 'react';
import CustomTable from '../components/Table';
import { CustomRowProps, HeadCell, Page} from '../types/table';
import PagesRow from "../components/Table/PagesRow";
import { Typography } from '@mui/material';
import {getPages} from '../components/lib/pages';


const Pages: React.FC = () => {
    const [pages, setPages] = useState<Page[]>([]);
  
    useEffect(() => {
      getPages()
        .then((response) => {
          setPages(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

  const headCells: HeadCell[] = [
    {
      id: 'title',
      numeric: false,
      label: 'TITLE',
    },
    {
      id: 'slug',
      numeric: false,
      label: 'DESCRIPTION',
    },
  ];
  return (
    <section>
      <Typography variant="h4" p={2} sx={{ color: '#0f0f0f' }}>
        Pages
      </Typography>
      <CustomTable customRow={(props: CustomRowProps) => <PagesRow {...props} />} headCells={headCells} data={pages} disablePagination={true} />
    </section>
  );
};

export default Pages;