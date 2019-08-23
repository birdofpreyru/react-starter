/* Entry point that ensures correct ordering of imported external styles. */

/* eslint-disable global-require */
if (process.env.NODE_ENV === 'production') {
  require('@dr.pogodin/react-utils/dist/prod/style.css');
} else {
  require('@dr.pogodin/react-utils/dist/dev/style.css');
}
/* eslint-enable global-require */

require('styles/global.scss');

const App = require('./app').default;

export default App;
