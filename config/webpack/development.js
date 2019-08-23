const path = require('path');
const standardConfigFactory = require(
  '@dr.pogodin/react-utils/config/webpack/app-development',
);
const webpackMerge = require('webpack-merge');

const customDefaultConfig = require('./default');

const standardDevelopmentConfig = standardConfigFactory({
  context: path.resolve(__dirname, '../..'),
  entry: {
    main: './src/client',
  },
});

module.exports = webpackMerge.smart(
  standardDevelopmentConfig,
  customDefaultConfig,
);
