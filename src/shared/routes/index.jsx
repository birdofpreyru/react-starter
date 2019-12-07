/**
 * Root router of the app.
 */
/* eslint-disable react/jsx-props-no-spreading */

import path from 'path';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { CodeSplit, Throbber, webpack } from '@dr.pogodin/react-utils';

import Error404Page from 'components/Error404Page';

function Examples(props) {
  return (
    <CodeSplit
      chunkName="react-examples"
      getComponentAsync={
        () => import(/* webpackChunkName: 'react-examples' */ './examples')
      }
      getComponentServer={
        () => {
          const p = webpack.resolveWeak('./examples');
          return webpack.requireWeak(path.resolve(__dirname, p));
        }
      }
      placeholder={Throbber}
      {...props}
    />
  );
}

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Examples} />
      <Error404Page />
    </Switch>
  );
}
