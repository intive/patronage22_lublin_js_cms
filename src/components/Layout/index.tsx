import React from "react";

import { Switch, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Menu from "../Menu/Menu";
import Orders from "../Orders/Orders";
import classes from './Layout.module.css'
import Header from "../Header/Header";

import { Grid, GridItem } from '@chakra-ui/react'

const Layout = () => {
  return (
    <>
        <Header />
        <Grid h='90vh' templateRows='repeat(3, 1fr)' templateColumns='repeat(6, 1fr)' gap={6} className={classes.main}>
          <GridItem rowSpan={2} colSpan={2} bg='bisque'>
            <Menu />
          </GridItem>
          <GridItem rowSpan={2} colSpan={4} bg='tomato'>
            <Orders />
          </GridItem>
          <GridItem rowSpan={1} colSpan={6} bg='green.300'>
            <Switch>
              <Route exact path="/dashboard"render={() => <Dashboard />} />
            </Switch>
          </GridItem>
        </Grid>
        
    </>
  );
};

export default Layout;
