import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

let initialWidth: number;
initialWidth = 220;

const Menu = () => {
  return (
    <Drawer
      sx={{
        width: initialWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: initialWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {[
          "Menu",
          "Home",
          "Strony",
          "Kategorie",
          "Produkty",
          "Zamówienia",
          "Klienci",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Menu;
