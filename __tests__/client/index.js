import { _ } from '@dr.pogodin/react-utils';

jest.mock('shared', () => ({
  default: 'APPLICATION',
}));

jest.mock('reducers', () => ({
  factory: () => () => ({}),
}));

jest.mock('@dr.pogodin/react-utils', () => {
  const TRU = require.requireActual('@dr.pogodin/react-utils');
  return {
    ...TRU,
    client: jest.fn(),
  };
});

test('Passes basic testing', () => {
  require('client');
  const { client } = require('@dr.pogodin/react-utils');

  const ops = client.mock.calls[0][0];
  expect(_.omit(ops, 'applicationModulePath')).toMatchSnapshot();

  expect(ops.applicationModulePath.endsWith('/src/shared/index.jsx'))
    .toBe(true);

  expect(ops.getApplication()).toBe('APPLICATION');

  expect(ops.storeFactory()).toBeInstanceOf(Promise);
});
