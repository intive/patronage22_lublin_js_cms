import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Menu from "../Menu";
import Header from "../Header";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import AddProduct from "../../pages/AddProduct";
import Products from "../../pages/Products";
import ErrorPageInfo from "../Errors/ErrorPageInfo";
import ProductDetails from "../../pages/ProductDetails";

const Layout = () => {
  let initialWidth: number;
  initialWidth = 220;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${initialWidth}px)`,
        }}
      >
        <Header />
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
        <Toolbar />
        <Divider />
        <Menu />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 2 }}
      >
        <Toolbar />
        <Switch>
          <Route exact path="/dashboard" render={() => <Dashboard/>}/>
          <Route exact path="/product/edit/:id" render={() => <ProductDetails />} /> 
          <Route exact path="/products" component={Products} /><Route/>
          <Route exact path="/add-product" render={() => <AddProduct/>} />
          <Route path='*' component={ErrorPageInfo}/>
        </Switch>
      </Box>
    </Box>
  );
};
export default Layout;
