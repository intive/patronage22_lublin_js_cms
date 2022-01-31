import React from "react";
import { Switch, Route} from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout"
import Layout from "../Layout";
import { ROUTES } from "../../types/routes";
import AuthGuard from "../HOC/AuthGuard";


const Router = () => {

  return (
    <Switch>
      <Route exact path={ROUTES.AUTH} component={AuthLayout} />
      <Route exact path={ROUTES.DASHBOARD} component={AuthGuard(Layout)} />
    </Switch>
  );
};
export default Router;
