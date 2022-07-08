import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Login = lazy(() => import("./pages/Login"));
const Products = lazy(() => import("./pages/Products"));
const Register = lazy(() => import("./pages/Register"));

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};
