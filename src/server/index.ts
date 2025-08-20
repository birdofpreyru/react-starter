/**
 * Server initialization.
 */

import fs from 'node:fs';
import path from 'node:path';

import type { Request } from 'express';
import type { Configuration } from 'webpack';

import { server as serverFactory } from '@dr.pogodin/react-utils';

import Application from 'shared';

const mode = process.env.NODE_ENV;

/* TODO: A quick workaround to pass build-time webpack config at the startup
 * of production build, without depedencies on development stuff. A more
 * elegant way to achieve the same will come later. */
let webpackConfig: Configuration;
if (mode === 'production') {
  const webpackConfigPath = path.resolve(__dirname, '../../.build-webpack-config.json');
  webpackConfig = JSON.parse(fs.readFileSync(webpackConfigPath, 'utf-8')) as Configuration;
} else {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const tmp = require('../../webpack.config') as ((m: string | undefined) => Configuration) | {
    default: (m: string | undefined) => Configuration;
  };
  const tmp2 = 'default' in tmp ? tmp.default : tmp;
  webpackConfig = tmp2(mode);
}

function beforeRender(req: Request) {
  return {
    initialState: {
      // TODO: Test, if it is safe to replace the operator in question by ??
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      domain: `${req.protocol}://${req.headers.host || req.hostname}`,
    },
  };
}

// TODO: Is there are cleaner way to do the same?
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace global {
  let KEEP_BUILD_INFO: boolean;
}

global.KEEP_BUILD_INFO = true;

void serverFactory!(webpackConfig, {
  Application,
  beforeRender,
  devMode: mode === 'development',

  /* Example of adding custom routes to the server. */
  onExpressJsSetup: (server) => {
    /* This sample & test endpoint replies back with headers, query,
     * and request body, received from the caller. */
    server.use('/__api__/example', (req, res) => {
      res.json({
        body: req.body as unknown,
        headers: req.headers,
        method: req.method,
        query: req.query,
      });
    });
  },
});
