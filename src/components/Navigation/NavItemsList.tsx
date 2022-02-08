import React from 'react';
import NavItem from './NavItem';
import {Menu} from '@chakra-ui/react'
import menuLinks from "../../types/routes";

function NavItemList() {
    return (
        <Menu >
            {
                menuLinks.map((e) =>
                    <NavItem key={e.id} to={e.to} label={e.label} />)
            }
        </Menu >
    )
}

export default NavItemList;
