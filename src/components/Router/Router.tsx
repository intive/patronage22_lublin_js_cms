import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
import Layout from "../Layout";
import { ROUTES } from "../../types/routes";
import AuthGuard from "../HOC/AuthGuard";
import AuthContext from "../../store/auth-context";

function Router() {
  const authCtx = useContext(AuthContext);

  return (
    <Switch>
      {!authCtx.isLoggedIn ? (
        <Route exact path={ROUTES.AUTH} component={AuthLayout} />
      ) : (
        <Route path={ROUTES.AUTH} exact>
          <Redirect to={ROUTES.DASHBOARD} />
        </Route>
      )}
      <Route exact path={ROUTES.ADD_PRODUCT} component={AuthGuard(Layout)} />
      <Route exact path={ROUTES.DASHBOARD} component={AuthGuard(Layout)} />
      <Route exact path={ROUTES.PAGES} component={AuthGuard(Layout)} />
      <Route exact path={ROUTES.PRODUCT} component={AuthGuard(Layout)} />
      <Route exact path={ROUTES.PRODUCTS} component={AuthGuard(Layout)} />
      <Route
        exact
        path={ROUTES.PRODUCT_DETAILS}
        component={AuthGuard(Layout)}
      />
      <Route exact path={ROUTES.CATEGORY_ADD} component={AuthGuard(Layout)} />
      <Route exact path={ROUTES.CATEGORIES} component={AuthGuard(Layout)} />
      <Route exact path={ROUTES.ORDERS} component={AuthGuard(Layout)} />
      <Route exact path={ROUTES.ORDER_DETAILS} component={AuthGuard(Layout)} />
      <Route exact path={ROUTES.PAGE_ADD} component={AuthGuard(Layout)} />
      <Route exact path={ROUTES.CATEGORY_EDIT} component={AuthGuard(Layout)} />
      <Route component={AuthGuard(Layout)} />
    </Switch>
  );
}
export default Router;
