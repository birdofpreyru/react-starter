/**
 * Server initialization.
 */

import fs from 'fs';
import path from 'path';

import { type Request } from 'express';

import { server as serverFactory } from '@dr.pogodin/react-utils';

import Application from 'shared';

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
  webpackConfig = require('../../webpack.config');
  if ('default' in webpackConfig) webpackConfig = webpackConfig.default;
  webpackConfig = webpackConfig(mode);
  /* eslint-enable global-require */
}

async function beforeRender(req: Request) {
  return {
    initialState: {
      domain: `${req.protocol}://${req.headers.host || req.hostname}`,
    },
  };
}

declare module global {
  let KEEP_BUILD_INFO: boolean;
}

global.KEEP_BUILD_INFO = true;
serverFactory!(webpackConfig, {
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
