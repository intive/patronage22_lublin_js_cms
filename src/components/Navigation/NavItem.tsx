import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {Link, ListItem} from '@mui/material'

type NavItemProps = {
    to: string;
    label: string
}

function NavItem(props: NavItemProps) {
    return (
        <ListItem >
            <Link component={RouterLink} underline='none' color='black' to={props.to} >{props.label}</Link >
        </ListItem >
    );
}

export default NavItem;
