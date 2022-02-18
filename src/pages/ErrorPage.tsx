import React from "react";
import {Link as RouterLink} from 'react-router-dom';
import {Link} from '@mui/material';
import {Box} from "@mui/material";

const ErrorPage = () => {
  return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'error.light',
        p: 20,
        fontSize: '3rem',
        'h2': {
          fontSize: '5rem'
        },
        '&:hover': {
          backgroundColor: 'warning.light',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
        <h2>404</h2>
        <p>Oops, page not found</p>
        <Link component={RouterLink} to='/dashboard' underline='none'>Back home</Link>
      </Box>
  );
};
export default ErrorPage;
