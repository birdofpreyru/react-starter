import path from 'path';

import standardConfigFactory from
  '@dr.pogodin/react-utils/config/webpack/app-development';

import { merge } from 'webpack-merge';

import customDefaultConfig from './default';

export default function factory(options = {}) {
  const standardDevelopmentConfig = standardConfigFactory({
    babelEnv: 'development',
    context: path.resolve(__dirname, '../..'),
    entry: './src/client',
    mode: 'development',
    typescript: true,
    ...options,
  });
  return merge(
    standardDevelopmentConfig,
    customDefaultConfig,
  );
}
