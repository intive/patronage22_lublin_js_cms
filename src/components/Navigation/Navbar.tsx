import React from 'react'
import classes from './Navigation.module.css'
import NavItemList from "./NavItemsList";

function Navbar () {
    return (
        <section className={classes.navbar}>
            <NavItemList/>
        </section>
    )
}


export default Navbar;
