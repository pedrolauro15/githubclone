import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import IndexPage from './pages/indexPage';
import Home from './pages/home';

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/gitpage/:repo" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;