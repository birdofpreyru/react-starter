/* eslint-disable import/no-extraneous-dependencies */

import path from 'path';

import standardConfigFactory from
  '@dr.pogodin/react-utils/config/webpack/app-development';

import type { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import customDefaultConfig from './default';

export default function factory(options = {}): Configuration {
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
