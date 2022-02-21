import React, { useContext } from "react";
//import classes from "./Header.module.css";
import NavBarContainer from "../NavBarContainer";
import LogoType from "../LogoType";
import HeaderMenu from "../HeaderMenu";

const Header = () => {
  return (
    <NavBarContainer>
      <LogoType />
      <HeaderMenu />
    </NavBarContainer>

    // Below, code from main

    // <header className={classes.header}>
    //   <h1>Header</h1>
    //   {isLoggedIn && (
    //     <button className={classes.button} onClick={logoutHandler}>
    //       Logout
    //     </button>
    //   )}
    // </header>
  );
};

export default Header;
