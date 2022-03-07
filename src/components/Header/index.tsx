import React from "react";
import NavBarContainer from "../NavBarContainer";
import LogoType from "../LogoType";
import HeaderMenu from "../HeaderMenu";

const Header = () => {
  return (
    <NavBarContainer>
      <LogoType />
      <HeaderMenu />
    </NavBarContainer>
  );
};

export default Header;
