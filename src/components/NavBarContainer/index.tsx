import Box from "@mui/material/Box";

import React from "react";
interface NavBarContainerProps {
  children?: React.ReactNode;
}

const NavBarContainer = (props: NavBarContainerProps) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      {props.children}
    </Box>
  );
};
export default NavBarContainer;
