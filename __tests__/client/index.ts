import type { Mock } from 'jest-mock';

import type * as ReactUtilsClientM from '@dr.pogodin/react-utils/client';
import { expect, jest, test } from '@jest/globals';

import type * as SharedM from 'shared';

jest.unstable_mockModule<typeof SharedM>('../../src/shared', () => ({
  default: 'APPLICATION',
}) as unknown as typeof SharedM);

const mockClient = jest.fn<typeof ReactUtilsClientM.launchClient>();

jest.unstable_mockModule<typeof ReactUtilsClientM>('@dr.pogodin/react-utils/client', () => ({
  launchClient: mockClient,
}));

test('Passes basic testing', async () => {
  await import('client');
  const { launchClient } = await import('@dr.pogodin/react-utils/client');

  const mClient = launchClient as unknown as
    Mock<typeof ReactUtilsClientM.launchClient>;

  expect(mClient.mock.calls[0]).toStrictEqual(['APPLICATION', {
    dontHydrate: false,
  }]);
});
