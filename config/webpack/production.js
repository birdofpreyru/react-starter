const path = require('path');

const standardConfigFactory = require(
  '@dr.pogodin/react-utils/config/webpack/app-production',
).default;

const { merge } = require('webpack-merge');

const customDefaultConfig = require('./default');

module.exports = function factory(options = {}) {
  const standardProductionConfig = standardConfigFactory({
    context: path.resolve(__dirname, '../..'),
    entry: './src/client',
    keepBuildInfo: Boolean(global.KEEP_BUILD_INFO),
    ...options,
  });
  return merge(
    standardProductionConfig,
    customDefaultConfig,
  );
};
