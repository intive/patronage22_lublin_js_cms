import React from "react";
import {Switch, Route} from "react-router-dom";
// import Dashboard from "./Dashboard";
import Menu from "../components/Menu";
import Header from "../components/Header/Header";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ErrorInfo from "../components/Errors/ErrorPageInfo";

const ErrorPage = () => {
  let initialWidth: number;
  initialWidth = 220;
  return (
      <Box sx={{display: "flex"}}>
      <CssBaseline/>
      <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${initialWidth}px)`,
          }}
      >
        <Header/>
      </AppBar>
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
        <Toolbar/>
        <Divider/>
        <Menu/>
      </Drawer>
      <Box
          component="main"
          sx={{flexGrow: 1, bgcolor: "background.default", p: 2}}
      >
        <Toolbar/>
        <Switch>
          <Route render={() => <ErrorInfo/>}/>
        </Switch>
      </Box>
      </Box>
  );
};
export default ErrorPage;
