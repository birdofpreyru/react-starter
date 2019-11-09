import { client } from '@dr.pogodin/react-utils';

client({
  applicationModulePath: require.resolve('../shared'),
  /* eslint-disable global-require */
  getApplication: () => require('../shared').default,
  /* eslint-enable global-require */
  moduleHot: module.hot,
});
