import React from 'react';
import NavItem from './NavItem';
import {Menu} from '@chakra-ui/react'
import dataLinks from "./dataLinks";

function NavItemList() {
    return (
        <Menu >
            {
                dataLinks.map((e) =>
                    <NavItem key={e.id} to={e.to} label={e.label} />)
            }
        </Menu >
    )
}

export default NavItemList;
