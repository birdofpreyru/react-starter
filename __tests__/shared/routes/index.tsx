/** @jest-environment jsdom */

import { MemoryRouter } from 'react-router';

import type * as ReactUtilsM from '@dr.pogodin/react-utils';
import { mockClientSide, snapshot } from '@dr.pogodin/react-utils/jest';

import type * as RoutesM from 'routes';

test('Matches shallow snapshot', async () => {
  mockClientSide();
  window.REACT_UTILS_INJECTION = {
    CHUNK_GROUPS: {
      'code-split-example': [],
      'react-examples': [],
    },
  };
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { GlobalStateProvider, time } = require('@dr.pogodin/react-utils') as typeof ReactUtilsM;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const Routes = (require('routes') as typeof RoutesM).default;
  await snapshot(
    <GlobalStateProvider initialState={{}}>
      <MemoryRouter>
        <Routes />
      </MemoryRouter>
    </GlobalStateProvider>,
    { await: time.timer(0) },
  );
});
