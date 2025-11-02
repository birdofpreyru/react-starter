/* global module */

module.exports = {
  plugins: [['babel-plugin-transform-import-meta', { module: 'ES6' }]],
  presets: [
    ['@dr.pogodin/react-utils/config/babel/node-ssr', {
      typescript: true,
    }],
  ],
};
