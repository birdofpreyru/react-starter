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

require('client');
const { client } = require('@dr.pogodin/react-utils');

test('Passes basic testing', () => {
  expect(client.mock.calls[0]).toEqual(['APPLICATION', {
    dontHydrate: false,
  }]);
});

export default undefined;
