import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
import Layout from "../Layout";
import { ROUTES } from "../../types/routes";
import AuthGuard from "../HOC/AuthGuard";
import AuthContext from "../../store/auth-context";

const Router = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to={authCtx.isLoggedIn ? ROUTES.DASHBOARD : ROUTES.AUTH} />
      </Route>
      <Route exact path={ROUTES.AUTH} component={AuthLayout} />
      <Route exact path={ROUTES.ADD_PRODUCT} component={AuthGuard(Layout)} />
      <Route exact path={ROUTES.DASHBOARD} component={AuthGuard(Layout)} />
      <Route exact path={ROUTES.PRODUCT} component={AuthGuard(Layout)} />
      <Route exact path={ROUTES.PRODUCTS} component={AuthGuard(Layout)} />
      <Route
        exact
        path={ROUTES.PRODUCT_DETAILS}
        component={AuthGuard(Layout)}
      />
      <Route exact path={ROUTES.CATEGORY_ADD} component={AuthGuard(Layout)} />
      <Route exact path={ROUTES.CATEGORIES} component={AuthGuard(Layout)} />
      <Route component={AuthGuard(Layout)} />
    </Switch>
  );
};
export default Router;
