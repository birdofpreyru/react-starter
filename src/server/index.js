/**
 * Server initialization.
 */

import fs from 'fs';
import path from 'path';

import Application from 'shared';
import { factory as reducerFactory } from 'reducers';
import { redux, server as serverFactory } from '@dr.pogodin/react-utils';

const mode = process.env.BABEL_ENV;

/* TODO: A quick workaround to pass build-time webpack config at the startup
 * of production build, without depedencies on development stuff. A more
 * elegant way to achieve the same will come later. */
let webpackConfig;
if (mode === 'production') {
  webpackConfig = path.resolve(__dirname, '../../.build-webpack-config.json');
  webpackConfig = JSON.parse(fs.readFileSync(webpackConfig, 'utf-8'));
} else {
  /* eslint-disable global-require */
  webpackConfig = require('../../webpack.config')(mode);
  /* eslint-enable global-require */
}

async function beforeRender(req) {
  const store = await redux.storeFactory({
    getReducerFactory: () => reducerFactory,
    httpRequest: req,
  });
  return { store };
}

global.KEEP_BUILD_INFO = true;
serverFactory(webpackConfig, {
  Application,
  beforeRender,
  devMode: mode === 'development',
});
