/** @jest-environment jsdom */

import { MemoryRouter } from 'react-router-dom';
import { mockClientSide, snapshot } from '@dr.pogodin/react-utils/jest';

test('Matches shallow snapshot', async () => {
  mockClientSide();
  window.REACT_UTILS_INJECTION = {
    CHUNK_GROUPS: {
      'code-split-example': [],
      'react-examples': [],
    },
  };
  const { GlobalStateProvider, time } = require('@dr.pogodin/react-utils');
  const Routes = require('routes').default;
  await snapshot(
    <GlobalStateProvider initialState={{}}>
      <MemoryRouter><Routes /></MemoryRouter>
    </GlobalStateProvider>,
    { await: time.timer(0) },
  );
});
