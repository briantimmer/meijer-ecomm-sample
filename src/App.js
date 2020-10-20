import React from 'react';
import { Router, Route, Switch } from "react-router";
import GlobalState from "./context/GlobalState";

import Home from './views/Home';
import NotFound from './views/NotFound';

import './App.scss';

const createHistory = require("history").createBrowserHistory;
const history = createHistory();
const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");

function App() {
  return (
    <GlobalState>
      <Router basename={baseUrl} history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          
          <Route component={NotFound} />
        </Switch>
      </Router>
    </GlobalState>
  );
}

export default App;
