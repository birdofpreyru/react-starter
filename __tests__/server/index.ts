jest.mock('shared', () => 'APPLICATION');
jest.mock('../../webpack.config', () => () => ({}));

jest.mock('@dr.pogodin/react-utils', () => {
  const TRU = jest.requireActual('@dr.pogodin/react-utils');
  return {
    ...TRU,
    server: jest.fn(),
  };
});

require('server');
const { server } = require('@dr.pogodin/react-utils');

test('Passes basic tests', () => {
  expect(server.mock.calls).toHaveLength(1);
  expect(server.mock.calls[0]).toMatchSnapshot();
  const { beforeRender } = server.mock.calls[0][1];
  expect(
    () => beforeRender({ headers: {} }),
  ).not.toThrow();
});
