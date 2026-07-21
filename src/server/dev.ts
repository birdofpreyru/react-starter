import { createRequire } from 'node:module';

import { registerBabelLoader, registerResolver } from '@dr.pogodin/react-utils/server';

const require = createRequire(import.meta.url);

registerResolver();
registerBabelLoader();

// eslint-disable-next-line import/no-commonjs, import/no-unassigned-import
require('./index');
