import React from 'react';
import NavItem from './NavItem';
import {List} from '@mui/material/';
import menuLinks from "../../types/routes";

function NavItemList() {
    return (
        <List >
            {
                menuLinks.map((e) =>
                    <NavItem key={e.id} to={e.to} label={e.label} />)
            }
        </List>
    )
}

export default NavItemList;
