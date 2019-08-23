jest.mock('shared', () => 'APPLICATION');
jest.mock('reducers', () => ({ factory: jest.fn(() => () => ({})) }));
jest.mock('../../webpack.config', () => () => ({}));

jest.mock('@dr.pogodin/react-utils', () => {
  const TRU = require.requireActual('@dr.pogodin/react-utils');
  return {
    ...TRU,
    server: jest.fn(),
  };
});

test('Passes basic tests', () => {
  require('server');
  const { server } = require('@dr.pogodin/react-utils');
  expect(server.mock.calls).toHaveLength(1);
  expect(server.mock.calls[0]).toMatchSnapshot();
  const { beforeRender } = server.mock.calls[0][1];
  expect(() => beforeRender()).not.toThrow();
});
