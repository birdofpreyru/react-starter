/**
 * Example routes.
 */

import React from 'react';

import { _, PT } from '@dr.pogodin/react-utils';

import { Route, Switch } from 'react-router-dom';

import Buttons from 'components/examples/Buttons';
import Content from 'components/examples/Content';
import ApiClient from 'components/examples/ApiClient';
import AsyncGlobalData from 'components/examples/AsyncGlobalData';
import GlobalState from 'components/examples/GlobalState';
import PageLayout from 'components/examples/PageLayout';
import ReactThemes from 'components/examples/ReactThemes';
import Svg from 'components/examples/Svg';
import Throbber from 'components/examples/Throbber';
import Error404 from 'components/Error404Page';

export default function Routes({ match }) {
  const path = _.trimEnd(match.path, '/');
  return (
    <Switch>
      <Route component={Content} exact path={path || '/'} />
      <Route component={ApiClient} exact path={`${path}/api-client`} />
      <Route
        component={AsyncGlobalData}
        exact
        path={`${path}/async-global-data`}
      />
      <Route component={Buttons} exact path={`${path}/buttons`} />
      <Route component={GlobalState} exact path={`${path}/global-state`} />
      <Route component={PageLayout} exact path={`${path}/page-layout`} />
      <Route component={ReactThemes} exact path={`${path}/react-themes`} />
      <Route component={Svg} exact path={`${path}/svg`} />
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
