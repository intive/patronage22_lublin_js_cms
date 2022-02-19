import { IconButton, Box, Menu, MenuItem } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import FaceIcon from "@mui/icons-material/Face";
import * as React from "react";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";

export default function MenuToggle() {
  const authCtx = useContext(AuthContext);
  // const isLoggedIn = authCtx.isLoggedIn;

  const history = useHistory();

  const logoutHandler = () => {
    handleClose();
    authCtx.logout();
    history.replace("/");
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <FaceIcon fontSize="large" sx={{ color: "white", marginRight: "5px" }} />
      <IconButton sx={{ margin: "auto 10px" }} onClick={handleClick}>
        {open ? (
          <CloseIcon fontSize="large" sx={{ color: "white" }} />
        ) : (
          <MenuIcon fontSize="large" sx={{ color: "white" }} />
        )}
      </IconButton>
      <Menu
        id="demo-positioned-menu"
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
        <MenuItem onClick={handleClose}>Profil</MenuItem>
        <MenuItem onClick={logoutHandler}>Wyloguj</MenuItem>
      </Menu>
    </Box>
  );
}
