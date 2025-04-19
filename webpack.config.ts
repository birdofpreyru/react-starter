import fs from 'fs';

import type { Configuration } from 'webpack';

import devWebpackConfig from './config/webpack/development';
import prodWebpackConfig from './config/webpack/production';

export default function configFactory(env: string): Configuration {
  let baseFactory: () => Configuration;
  switch (env) {
    case 'development':
      baseFactory = devWebpackConfig;
      break;
    case 'production':
      baseFactory = prodWebpackConfig;
      break;
    default: throw Error(`Unexpected environment "${env}"`);
  }

  const config = baseFactory();
  fs.writeFileSync(
    `${__dirname}/.build-webpack-config.json`,
    JSON.stringify(config),
  );
  return config;
}
