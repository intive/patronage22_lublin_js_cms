import React from "react";
import classes from "./Menu.module.css";
import Navbar from "../Navigation";

const Menu = () => {
  return (
    <section className={classes.menu}>
      <h1>Menu Component</h1>
        <Navbar />
    </section>
  );
};

export default Menu;
