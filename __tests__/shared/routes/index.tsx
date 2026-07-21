/** @jest-environment jsdom */

import { MemoryRouter } from 'react-router';

import { mockClientSide, snapshot } from '@dr.pogodin/react-utils/jest';
import { test } from '@jest/globals';

test('Matches shallow snapshot', async () => {
  mockClientSide();

  const {
    GlobalStateProvider,
    setClientChunkGroups,
    time,
  } = await import('@dr.pogodin/react-utils');

  setClientChunkGroups({
    'code-split-example': [],
    'react-examples': [],
  });

  const Routes = (await import('routes')).default;

  await snapshot(
    <GlobalStateProvider initialState={{}}>
      <MemoryRouter>
        <Routes />
      </MemoryRouter>
    </GlobalStateProvider>,
    { await: time.timer(0) },
  );
});
