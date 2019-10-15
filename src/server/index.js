/**
 * Server initialization.
 */

import fs from 'fs';
import path from 'path';

import Application from 'shared';
import { factory as reducerFactory } from 'reducers';
import { redux, server as serverFactory } from '@dr.pogodin/react-utils';

const mode = process.env.NODE_ENV;

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

  /* Example of adding custom routes to the server. */
  onExpressJsSetup: (server) => {
    /* This sample & test endpoint replies back with headers, query,
     * and request body, received from the caller. */
    server.use('/__api__/example', (req, res) => {
      res.json({
        method: req.method,
        headers: req.headers,
        query: req.query,
        body: req.body,
      });
    });
  },
});
