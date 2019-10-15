/**
 * Example routes.
 */

import React from 'react';

import PT from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Content from 'components/examples/Content';
import ApiClient from 'components/examples/ApiClient';
import Error404 from 'components/Error404Page';

export default function Routes({ match }) {
  const { path } = match;
  return (
    <Switch>
      <Route component={Content} exact path={path} />
      <Route component={ApiClient} exact path={`${path}/api-client`} />
      <Error404 />
    </Switch>
  );
}

Routes.propTypes = {
  match: PT.shape({
    path: PT.string.isRequired,
  }).isRequired,
};
