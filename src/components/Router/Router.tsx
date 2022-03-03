import React from "react";
import {Switch, Route} from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
import Layout from "../Layout";
import {ROUTES} from "../../types/routes";
import AuthGuard from "../HOC/AuthGuard";
import EditCategory from "../../pages/EditCategory";

const Router = () => {
  return (
      <Switch>
        <Route exact path={ROUTES.AUTH} component={AuthLayout}/>
        <Route exact path={ROUTES.ADD_PRODUCT} component={AuthGuard(Layout)} />
        <Route exact path={ROUTES.DASHBOARD} component={AuthGuard(Layout)}/>
        <Route exact path={ROUTES.PRODUCT} component={AuthGuard(Layout)} />
        <Route exact path={ROUTES.PRODUCTS} component={AuthGuard(Layout)} />
        <Route exact path={ROUTES.PRODUCT_DETAILS} component={AuthGuard(Layout)} />
        <Route exact path={ROUTES.CATEGORY_EDIT} component={EditCategory}/>
        <Route component={AuthGuard(Layout)}/>
      </Switch>
  );
};
export default Router;
