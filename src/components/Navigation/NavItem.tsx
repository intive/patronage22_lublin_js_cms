import React from 'react';
import {Link as Route} from 'react-router-dom';
import {Link} from '@chakra-ui/react'

function NavItem(state: { to: string; label: string }) {
    return (
        <li >
            <Link as={Route} to={state.to} >{state.label}</Link >
        </li >
    );
}

export default NavItem;
