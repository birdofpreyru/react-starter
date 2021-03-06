const path = require('path');
const standardConfigFactory = require(
  '@dr.pogodin/react-utils/config/webpack/app-production',
);
const { merge } = require('webpack-merge');

const customDefaultConfig = require('./default');

const standardProductionConfig = standardConfigFactory({
  context: path.resolve(__dirname, '../..'),
  entry: './src/client',
  keepBuildInfo: Boolean(global.KEEP_BUILD_INFO),
});

module.exports = merge(
  standardProductionConfig,
  customDefaultConfig,
);
