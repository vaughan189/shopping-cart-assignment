import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";


export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/cart" component={Cart} />
      <Route path="*">
      <NotFound />
    </Route>
    </Switch>
  );
};
