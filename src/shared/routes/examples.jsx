/**
 * Example routes.
 */

import _ from 'lodash';
import React from 'react';

import PT from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Content from 'components/examples/Content';
import ApiClient from 'components/examples/ApiClient';
import Throbber from 'components/examples/Throbber';
import Error404 from 'components/Error404Page';

export default function Routes({ match }) {
  const path = _.trimEnd(match.path, '/');
  return (
    <Switch>
      <Route component={Content} exact path={path || '/'} />
      <Route component={ApiClient} exact path={`${path}/api-client`} />
      <Route component={Throbber} exact path={`${path}/throbber`} />
      <Error404 />
    </Switch>
  );
}

Routes.propTypes = {
  match: PT.shape({
    path: PT.string.isRequired,
  }).isRequired,
};
