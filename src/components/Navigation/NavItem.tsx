import React from 'react';
import {Link as Route} from 'react-router-dom';
import {Link,  MenuItem} from '@chakra-ui/react'

type NavItemProps = {
    to: string;
    label: string
}

function NavItem(props: NavItemProps) {
    return (
        <MenuItem >
            <Link as={Route} to={props.to} >{props.label}</Link >
        </MenuItem >
    );
}

export default NavItem;
