/* eslint-disable import/no-extraneous-dependencies */

import path from 'node:path';

import type { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import standardConfigFactory from
  '@dr.pogodin/react-utils/config/webpack/app-development';

import customDefaultConfig from './default.ts';

export default function factory(options = {}): Configuration {
  const standardDevelopmentConfig = standardConfigFactory({
    babelEnv: 'development',
    context: path.resolve(import.meta.dirname, '../..'),
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
