import React from 'react';
import Orders from './Orders';
import Home from './Home';
import { Switch } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
