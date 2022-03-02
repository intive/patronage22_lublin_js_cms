import React from "react";
import {Box, Typography} from '@mui/material';
import classes from './ErrorPageInfo.module.css';

function ErrorInfo() {
  return (
      <Box className={classes.container}>
        <Typography variant='h3'>404 - Page not found</Typography>
      </Box>
  )
}

export default ErrorInfo;
