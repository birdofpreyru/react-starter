/* eslint-disable import/no-extraneous-dependencies */

import * as path from 'node:path';

import standardConfigFactory from
  '@dr.pogodin/react-utils/config/webpack/app-production';

import type { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import customDefaultConfig from './default';

export default function factory(options = {}): Configuration {
  const standardProductionConfig = standardConfigFactory({
    babelEnv: 'production',
    context: path.resolve(__dirname, '../..'),
    entry: './src/client',
    keepBuildInfo: !!global.KEEP_BUILD_INFO,
    mode: 'production',
    typescript: true,
    ...options,
  });
  return merge(
    standardProductionConfig,
    customDefaultConfig,
  );
}
