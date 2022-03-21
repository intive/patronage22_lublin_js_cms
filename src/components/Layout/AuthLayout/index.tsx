import React from "react";
import AuthPage from "../../../pages/AuthPage";
import { Switch, Route } from "react-router-dom";
import classes from "./AuthLayout.module.css";
import Box from "@mui/material/Box";

const AuthLayout = () => {
  return (
    <Box className={classes.container}>
      <Switch>
        <Route exact path="/auth" render={() => <AuthPage />}></Route>
      </Switch>
    </Box>
  );
};

export default AuthLayout;
