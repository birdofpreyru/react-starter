jest.mock('shared', () => ({
  default: 'APPLICATION',
}));

jest.mock('@dr.pogodin/react-utils', () => {
  const TRU = jest.requireActual('@dr.pogodin/react-utils');
  return {
    ...TRU,
    client: jest.fn(),
  };
});

test('Passes basic testing', () => {
  require('client');
  const { client } = require('@dr.pogodin/react-utils');
  expect(client.mock.calls[0]).toEqual([{
    default: 'APPLICATION',
  }]);
});
