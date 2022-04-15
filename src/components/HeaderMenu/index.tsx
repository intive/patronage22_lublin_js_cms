import { IconButton, Box, Menu, MenuItem } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import React, { useContext, useState } from "react";

import { useHistory } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AuthContext from "../../store/auth-context";
import styles from "./index.module.css";

function HeaderMenu() {
  const authCtx = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/");
  };

  const profilePageHandler = () => {
    history.replace("/profile-page");
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={styles.wrapper}>
      <FaceIcon fontSize="large" className={styles.faceIcon} />
      <IconButton className={styles.iconButton} onClick={handleClick}>
        <MoreVertIcon fontSize="large" className={styles.moreVertIcon} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={profilePageHandler}>Profil</MenuItem>
        <MenuItem onClick={logoutHandler}>Wyloguj</MenuItem>
      </Menu>
    </Box>
  );
}

export default HeaderMenu;
