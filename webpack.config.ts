/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

import fs from 'fs';

export default function configFactory(env: string) {
  const baseFactory = require(`./config/webpack/${env}.ts`).default;
  const config = baseFactory();
  fs.writeFileSync(
    `${__dirname}/.build-webpack-config.json`,
    JSON.stringify(config),
  );
  return config;
};
