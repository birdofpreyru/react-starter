import * as path from 'path';

import standardConfigFactory from
  '@dr.pogodin/react-utils/config/webpack/app-production';

import { merge } from 'webpack-merge';

import customDefaultConfig from './default';

declare module global {
  const KEEP_BUILD_INFO: {};
}

export default function factory(options = {}) {
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
