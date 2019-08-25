/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

const fs = require('fs');

module.exports = function configFactory(env) {
  const config = require(`./config/webpack/${env}.js`);
  fs.writeFileSync(
    `${__dirname}/.build-webpack-config.json`,
    JSON.stringify(config),
  );
  return config;
};
