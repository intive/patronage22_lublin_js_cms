import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import NavItemList from "./NavItemList";

export default function Navigation() {
    return (
        <Box sx={{display: 'flex'}} >
            <CssBaseline />
            <NavItemList />
        </Box >
    );
}
