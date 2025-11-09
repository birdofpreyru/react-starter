import type * as ReactUtilsClientM from '@dr.pogodin/react-utils/client';

import type * as SharedM from 'shared';

jest.mock<typeof SharedM>('shared', () => ({
  default: 'APPLICATION',
}) as unknown as typeof SharedM);

const mockClient = jest.fn();

jest.mock<typeof ReactUtilsClientM>('@dr.pogodin/react-utils/client', () => ({
  launchClient: mockClient,
}));

// eslint-disable-next-line import/no-unassigned-import, @typescript-eslint/no-require-imports
require('client');

test('Passes basic testing', async () => {
  const { launchClient } = await import(/* webpackChunkName: "test" */ '@dr.pogodin/react-utils/client');
  const mClient = launchClient as unknown as
    jest.MockedFn<typeof ReactUtilsClientM['launchClient']>;
  expect(mClient.mock.calls[0]).toStrictEqual(['APPLICATION', {
    dontHydrate: false,
  }]);
});
