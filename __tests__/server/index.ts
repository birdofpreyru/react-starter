// TODO: Revise this module - too much forced type casting and disabled rules here.

import type * as ReactUtilsM from '@dr.pogodin/react-utils';

import type * as SharedM from 'shared';
import type * as WebpackConfigM from '../../webpack.config';

jest.mock<typeof SharedM>('shared', () => 'APPLICATION' as unknown as typeof SharedM);
jest.mock<typeof WebpackConfigM>('../../webpack.config', () => (() => ({})) as unknown as typeof WebpackConfigM);

jest.mock<typeof ReactUtilsM>('@dr.pogodin/react-utils', () => {
  const TRU: typeof ReactUtilsM = jest.requireActual('@dr.pogodin/react-utils');
  return {
    ...TRU,
    server: jest.fn(),
  } as unknown as typeof ReactUtilsM;
});

// eslint-disable-next-line import/no-unassigned-import, @typescript-eslint/no-require-imports
require('server');

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { server } = require('@dr.pogodin/react-utils') as typeof ReactUtilsM;

test('Passes basic tests', () => {
  const mServer = server as unknown as jest.MockedFn<Exclude<typeof ReactUtilsM['server'], null>>;

  expect(mServer.mock.calls).toHaveLength(1);
  expect(mServer.mock.calls[0]).toMatchSnapshot();
  const [, options] = mServer.mock.calls[0]!;
  const { beforeRender } = options!;
  expect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
    void beforeRender!({ headers: {} } as any, {});
  }).not.toThrow();
});
