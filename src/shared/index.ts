/* Entry point that ensures correct ordering of imported external styles. */

import type * as AppM from './app';

if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line import/no-unassigned-import, @typescript-eslint/no-require-imports
  require('@dr.pogodin/react-utils/prod-styles');
} else {
  // eslint-disable-next-line import/no-unassigned-import, @typescript-eslint/no-require-imports
  require('@dr.pogodin/react-utils/dev-styles');
}

// eslint-disable-next-line @typescript-eslint/no-require-imports
require('styles/global.scss');

// eslint-disable-next-line @typescript-eslint/no-require-imports
const App = (require('./app') as typeof AppM).default;

export default App;
