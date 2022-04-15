import React from "react";
import { Switch, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import AuthPage from "../../../pages/AuthPage";
import classes from "./AuthLayout.module.css";

function AuthLayout() {
  return (
    <Box className={classes.container}>
      <Switch>
        <Route exact path="/" render={() => <AuthPage />} />
      </Switch>
    </Box>
  );
}

export default AuthLayout;
