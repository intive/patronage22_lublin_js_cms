import React from "react";
import {Box, Link, Typography} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';

function ErrorInfo() {
  return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        margin: '3.2rem 0',
        padding: '1em 1em 2em 1em',
        backgroundColor: 'error.main',
      }}>
        <Typography variant='h3'>Error 404</Typography>
        <Typography paragraph={true} fontSize='2em'>You just broke the Internet</Typography>
        <Link component={RouterLink} to='/dashboard' underline='hover' color='goldenrod' fontSize='2em'>FIX IT</Link>
      </Box>
  )
}

export default ErrorInfo;
