/**
 * Example routes.
 */

import React from 'react';

import { _, PT } from '@dr.pogodin/react-utils';

import { Route, Switch } from 'react-router-dom';

import Buttons from 'pages/examples/Buttons';
import Content from 'pages/examples/Content';
import ApiClient from 'pages/examples/ApiClient';
import AsyncGlobalData from 'pages/examples/AsyncGlobalData';
import GlobalState from 'pages/examples/GlobalState';
import ModalExample from 'pages/examples/Modal';
import PageLayout from 'pages/examples/PageLayout';
import ReactThemes from 'pages/examples/ReactThemes';
import Svg from 'pages/examples/Svg';
import Throbber from 'pages/examples/Throbber';
import Tooltip from 'pages/examples/Tooltip';
import Error404 from 'pages/Error404';

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
      <Route component={ModalExample} exact path={`${path}/modal`} />
      <Route component={PageLayout} exact path={`${path}/page-layout`} />
      <Route component={ReactThemes} exact path={`${path}/react-themes`} />
      <Route component={Svg} exact path={`${path}/svg`} />
      <Route component={Throbber} exact path={`${path}/throbber`} />
      <Route exact path={`${path}/tooltip`} component={Tooltip} />
      <Error404 />
    </Switch>
  );
}

Routes.propTypes = {
  match: PT.shape({
    path: PT.string.isRequired,
  }).isRequired,
};
