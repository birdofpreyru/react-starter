/**
 * Root router of the app.
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Error404Page from 'components/Error404Page';
import ExampleRoutes from './examples';

export default function Routes() {
  return (
    <Switch>
      <Route component={ExampleRoutes} path="/" />
      <Error404Page />
    </Switch>
  );
}
