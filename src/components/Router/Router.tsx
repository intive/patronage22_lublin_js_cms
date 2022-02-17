import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
import Layout from "../Layout";
import { ROUTES } from "../../types/routes";
import AuthGuard from "../HOC/AuthGuard";
import ErrorPage from "../../pages/ErrorPage";

const Router = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.AUTH} component={AuthLayout} />
      <Route exact path={ROUTES.DASHBOARD} component={AuthGuard(Layout)} />
      <Route exact path={ROUTES.PAGES} component={AuthGuard(ErrorPage)} />
      <Route exact path={ROUTES.CATEGORY} component={AuthGuard(ErrorPage)} />
      <Route exact path={ROUTES.PRODUCTS} component={AuthGuard(ErrorPage)} />
      <Route exact path={ROUTES.ORDERS} component={AuthGuard(ErrorPage)} />
      <Route exact path={ROUTES.CLIENTS} component={AuthGuard(ErrorPage)} />
    </Switch>
  );
};
export default Router;
