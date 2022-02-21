import { IconButton, Box, Menu, MenuItem } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import * as React from "react";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const HeaderMenu = () => {
  const authCtx = useContext(AuthContext);

  const history = useHistory();

  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/");
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    anchorEl ? setAnchorEl(null) : setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <FaceIcon fontSize="large" sx={{ color: "white", marginRight: "5px" }} />
      <IconButton sx={{ margin: "auto 10px" }} onClick={handleClick}>
        <MoreVertIcon fontSize="large" sx={{ color: "white" }} />
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
        <MenuItem onClick={handleClose}>Profil</MenuItem>
        <MenuItem onClick={logoutHandler}>Wyloguj</MenuItem>
      </Menu>
    </Box>
  );
};

export default HeaderMenu;