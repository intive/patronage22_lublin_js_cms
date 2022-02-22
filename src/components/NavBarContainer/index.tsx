import Box from "@mui/material/Box";
import styles from "./index.module.css";

import React from "react";
interface NavBarContainerProps {
  children?: React.ReactNode;
}

const NavBarContainer: React.FC<NavBarContainerProps> = (props) => {
  return <Box className={styles.container}>{props.children}</Box>;
};
export default NavBarContainer;
