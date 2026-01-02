// TODO: Revise this module - too much forced type casting and disabled rules here.

import type * as ReactUtilsServerM from '@dr.pogodin/react-utils/server';

import type * as SharedM from 'shared';
import type * as WebpackConfigM from '../../webpack.config';

jest.mock<typeof SharedM>(
  '../../src/shared',
  () => 'APPLICATION' as unknown as typeof SharedM,
);

jest.mock<typeof WebpackConfigM>(
  '../../webpack.config',
  () => (() => ({})) as unknown as typeof WebpackConfigM,
);

const mockLaunchServer = jest.fn();

jest.mock<typeof ReactUtilsServerM>('@dr.pogodin/react-utils/server', () => {
  const TRU: typeof ReactUtilsServerM = jest.requireActual('@dr.pogodin/react-utils/server');
  return {
    ...TRU,
    launchServer: mockLaunchServer,
  } as unknown as typeof ReactUtilsServerM;
});

// eslint-disable-next-line import/no-unassigned-import, @typescript-eslint/no-require-imports
require('server');

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { launchServer } = require('@dr.pogodin/react-utils/server') as typeof ReactUtilsServerM;

test('Passes basic tests', () => {
  const mServer = launchServer as unknown as jest.MockedFn<typeof ReactUtilsServerM['launchServer']>;

  expect(mServer).toHaveBeenCalledTimes(1);
  expect(mServer.mock.calls[0]).toMatchSnapshot();
  const [, options] = mServer.mock.calls[0]!;
  const { beforeRender } = options!;
  expect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
    void beforeRender!({ headers: {} } as any, {});
  }).not.toThrow();
});
