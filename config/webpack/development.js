const path = require('path');
const standardConfigFactory = require(
  '@dr.pogodin/react-utils/config/webpack/app-development',
);
const { merge } = require('webpack-merge');

const customDefaultConfig = require('./default');

const standardDevelopmentConfig = standardConfigFactory({
  context: path.resolve(__dirname, '../..'),
  entry: './src/client',
});

module.exports = merge(
  standardDevelopmentConfig,
  customDefaultConfig,
);
