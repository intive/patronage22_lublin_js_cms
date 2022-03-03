import React from "react";
import {Switch, Route} from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
import Layout from "../Layout";
import {ROUTES} from "../../types/routes";
import AuthGuard from "../HOC/AuthGuard";
import EditCategoryForm from "../EditCategoryForm";

const Router = () => {
  return (
<<<<<<< HEAD
    <Switch>
      <Route exact path={ROUTES.AUTH} component={AuthLayout} />
      <Route exact path={ROUTES.DASHBOARD} component={AuthGuard(Layout)} />
    </Switch>
=======

      <Switch>
        <Route exact path={ROUTES.AUTH} component={AuthLayout}/>
        <Route exact path={ROUTES.DASHBOARD} component={AuthGuard(Layout)}/>
        <Route exact path={ROUTES.PRODUCT} component={AuthGuard(Layout)} />
        <Route component={AuthGuard(Layout)}/>
      </Switch>
>>>>>>> main
  );
};
export default Router;
