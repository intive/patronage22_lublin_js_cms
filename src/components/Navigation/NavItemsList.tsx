import React from 'react';

import NavItem from './NavItem';
import dataLinks from "./dataLinks";



function NavItemList () {
    return(
        <ul>
            {
              dataLinks.map((e)=>
              <NavItem key={e.id} to={e.to} label={e.label}/>)
            }
        </ul>
    )
}

export default NavItemList;
