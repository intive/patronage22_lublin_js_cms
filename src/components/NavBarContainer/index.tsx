import Box from "@mui/material/Box";
import React from "react";
import styles from "./index.module.css";

interface NavBarContainerProps {
  children?: React.ReactNode;
}

const NavBarContainer: React.FC<NavBarContainerProps> = (props) => {
  return <Box className={styles.container}>{props.children}</Box>;
};
export default NavBarContainer;
