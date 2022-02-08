import React from 'react';
import {Link as Route} from 'react-router-dom';
import {Link, List} from '@chakra-ui/react'

function NavItem(state:
                     {
                         to: string;
                         label: string
                     }) {
    return (
        <List >
            <Link as={Route} to={state.to} >{state.label}</Link >
        </List >
    );
}

export default NavItem;
