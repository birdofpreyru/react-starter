// TODO: Revise this module - too much forced type casting and disabled rules here.

import type { Mock } from 'jest-mock';
import type { FunctionComponent } from 'react';

import * as TRU from '@dr.pogodin/react-utils/server';
import { expect, jest, test } from '@jest/globals';

import type * as SharedM from 'shared';

import type * as WebpackConfigM from '../../webpack.config';

jest.unstable_mockModule<typeof SharedM>(
  '../../src/shared',
  () => ({
    default: 'APPLICATION' as unknown as FunctionComponent,
  }),
);

jest.unstable_mockModule<typeof WebpackConfigM>(
  '../../webpack.config',
  () => ({
    default: () => ({}),
  }),
);

const mockLaunchServer = jest.fn<typeof TRU.launchServer>();

jest.unstable_mockModule<typeof TRU>(
  '@dr.pogodin/react-utils/server',
  () => ({
    ...TRU,
    launchServer: mockLaunchServer,
  }),
);

test('Passes basic tests', async () => {
  const { launched } = await import('server');
  await launched;

  const {
    launchServer: launchReactUtilsServer,
  } = await import('@dr.pogodin/react-utils/server');

  const mServer = launchReactUtilsServer as unknown as
    Mock<typeof TRU.launchServer>;

  expect(launchReactUtilsServer).toHaveBeenCalledTimes(1);

  // TODO: The first argument captures the Webpack config read by the server,
  // which is unstable (might not exist in the local development / test environment,
  // includes a bunch of machine-specific absolute paths).
  const [firstCall] = mServer.mock.calls;
  if (!firstCall) throw Error('The mock server factory has not been called');

  firstCall[0] = {};
  expect(firstCall).toMatchSnapshot();
  const [, options] = firstCall;
  if (!options) throw Error('Missing options');

  const { beforeRender } = options;
  if (!beforeRender) throw Error('Missing beforeRender()');

  expect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
    void beforeRender({ headers: {} } as any, {});
  }).not.toThrow();
});
