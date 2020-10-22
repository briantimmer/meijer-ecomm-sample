import React from 'react';
import { Router, Route, Switch } from "react-router";
import GlobalState from "./context/GlobalState";
import MainLayout from "./components/layout/MainLayout";

import Home from './views/Home';
import Cart from './views/Cart';
import NotFound from './views/NotFound';

import './App.scss';

const createHistory = require("history").createBrowserHistory;
const history = createHistory();
const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");

function App() {
  return (
    <GlobalState>
      <MainLayout>
        <Router basename={baseUrl} history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </MainLayout>
    </GlobalState>
  );
}

export default App;
