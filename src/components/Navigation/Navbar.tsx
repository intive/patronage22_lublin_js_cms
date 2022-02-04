import React from 'react'
import classes from './Navigation.module.css'
import NavItemList from "./NavItemsList";

function Navbar () {
    return (
        <section className={classes.menu}>
            <h1>Menu Component</h1>
            <NavItemList/>
        </section>
    )
}


export default Navbar;
