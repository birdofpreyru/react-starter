const path = require('path');
const standardConfigFactory = require(
  '@dr.pogodin/react-utils/config/webpack/app-development',
);
const { merge } = require('webpack-merge');

const customDefaultConfig = require('./default');

module.exports = function factory(options = {}) {
  const standardDevelopmentConfig = standardConfigFactory({
    context: path.resolve(__dirname, '../..'),
    entry: './src/client',
    ...options,
  });
  factory.buildInfo = standardConfigFactory.buildInfo;
  return merge(
    standardDevelopmentConfig,
    customDefaultConfig,
  );
};
