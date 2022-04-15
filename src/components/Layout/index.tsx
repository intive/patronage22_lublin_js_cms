import React from "react";
import { Switch, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Header from "../Header";
import Menu from "../Menu";
import Dashboard from "../../pages/Dashboard";
import Products from "../../pages/Products";
import ErrorPageInfo from "../Errors/ErrorPageInfo";
import ProductDetails from "../../pages/ProductDetails";
import AddProduct from "../../pages/AddProduct";
import Pages from "../../pages/Pages";
import AddCategory from "../../pages/AddCategory";
import AddPage from "../../pages/AddPage";
import Categories from "../../pages/Categories";
import Orders from "../../pages/Orders";
import OrderDetails from "../../pages/OrderDetails";
import EditCategory from "../../pages/EditCategory";
import Clients from "../../pages/Clients";

function Layout() {
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
          <Route exact path="/dashboard" render={() => <Dashboard />} />
          <Route exact path="/pages" render={() => <Pages />} />
          <Route exact path="/add-page" render={() => <AddPage />} />
          <Route exact path="/add-product" render={() => <AddProduct />} />
          <Route
            exact
            path="/product/edit/:id"
            render={() => <ProductDetails />}
          />
          <Route exact path="/add-category" render={() => <AddCategory />} />
          <Route exact path="/categories" render={() => <Categories />} />
          <Route exact path="/orders" render={() => <Orders />} />
          <Route exact path="/products" component={Products} />
          <Route
            exact
            path="/category/edit/:id"
            render={() => <EditCategory />}
          />
          <Route exact path="/clients" render={() => <Clients />} />
          <Route path="*" component={ErrorPageInfo} />
          <Route />
        </Switch>
      </Box>
    </Box>
  );
}
export default Layout;
