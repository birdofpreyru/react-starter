import type * as ReactUtilsM from '@dr.pogodin/react-utils';

import type * as SharedM from 'shared';

jest.mock<typeof SharedM>('shared', () => ({
  default: 'APPLICATION',
}) as unknown as typeof SharedM);

jest.mock<typeof ReactUtilsM>('@dr.pogodin/react-utils', () => {
  const TRU: typeof ReactUtilsM = jest.requireActual('@dr.pogodin/react-utils');
  return {
    ...TRU,
    client: jest.fn(),
  };
});

// eslint-disable-next-line import/no-unassigned-import, @typescript-eslint/no-require-imports
require('client');

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { client } = require('@dr.pogodin/react-utils') as typeof ReactUtilsM;

test('Passes basic testing', () => {
  const mClient = client as unknown as jest.MockedFn<Exclude<typeof ReactUtilsM['client'], null | undefined>>;
  expect(mClient.mock.calls[0]).toStrictEqual(['APPLICATION', {
    dontHydrate: false,
  }]);
});
