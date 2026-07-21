/**
 * Server initialization.
 */

import fs from 'node:fs';
import path from 'node:path';

import type { Request } from 'express';
import type { Configuration } from 'webpack';

import {
  launchServer as launchReactUtilsServer,
} from '@dr.pogodin/react-utils/server';

import Application from 'shared';

const mode = process.env.NODE_ENV;

/* TODO: A quick workaround to pass build-time webpack config at the startup
 * of production build, without depedencies on development stuff. A more
 * elegant way to achieve the same will come later. */
async function getWebpackConfig(): Promise<Configuration> {
  if (mode === 'production') {
    const webpackConfigPath = path.resolve(import.meta.dirname, '../../.build-webpack-config.json');
    return JSON.parse(fs.readFileSync(webpackConfigPath, 'utf-8')) as Configuration;
  }

  // eslint-disable-next-line
  const tmp = (await import('../../webpack.config')).default;
  return tmp(mode ?? '');
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

async function launchServer(): Promise<void> {
  const webpackConfig = await getWebpackConfig();
  await launchReactUtilsServer(webpackConfig, {
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
}

export const launched = launchServer();
