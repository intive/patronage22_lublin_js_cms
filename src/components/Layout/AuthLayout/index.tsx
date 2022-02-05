import React from "react";
import AuthPage from "../../../pages/AuthPage";
import { Switch, Route } from "react-router-dom";
import classes from "./AuthLayout.module.css";
import { Container } from "@chakra-ui/react";

const AuthLayout = () => {
  return (
    <div>
      <Container maxW="xl" centerContent className={classes.container}>
        <Switch>
          <Route exact path="/" render={() => <AuthPage />}></Route>
        </Switch>
      </Container>
    </div>
  );
};

export default AuthLayout;
