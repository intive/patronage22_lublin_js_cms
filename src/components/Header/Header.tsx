import React, { useContext, useState } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./Header.module.css";
import { useHistory } from "react-router-dom";
import NavBarContainer from "./NavBarContainer";
import Logo from "./Logo";
import MenuToggle from "./MenuToggle";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const history = useHistory();

  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/");
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer>
      {/* Simple logo, now only as String */}
      <Logo></Logo>
      <MenuToggle toggle={toggle} isOpen={isOpen}></MenuToggle>
      {/* Place for Menu Component Wrapper */}
    </NavBarContainer>

    // <header className={classes.header}>
    //   <h1>Header Component</h1>
    //   {isLoggedIn && (
    //     <button className={classes.button} onClick={logoutHandler}>
    //       Logout
    //     </button>
    //   )}
    // </header>
  );
};

export default Header;
