import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Projects from './pages/Projects';
import Info from './pages/Info';

const Pages = () => (
  <Switch>
    <Route exact path="/" component={Projects} />
    <Route component={Info} />
  </Switch>
);

export default Pages;
