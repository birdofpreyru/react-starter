import fs from 'node:fs';

import type { Configuration } from 'webpack';

import devWebpackConfig from './config/webpack/development.ts';
import prodWebpackConfig from './config/webpack/production.ts';

export default function configFactory(env: string): Configuration {
  let baseFactory: () => Configuration;
  switch (env) {
    case 'development':
    case 'test':
      baseFactory = devWebpackConfig;
      break;
    case 'production':
      baseFactory = prodWebpackConfig;
      break;
    default: throw Error(`Unexpected environment "${env}"`);
  }

  const config = baseFactory();
  fs.writeFileSync(
    `${import.meta.dirname}/.build-webpack-config.json`,
    JSON.stringify(config),
  );
  return config;
}
