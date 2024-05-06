/** @jest-environment jsdom */

import { GlobalStateProvider } from '@dr.pogodin/react-utils';

import { snapshot } from '@dr.pogodin/react-utils/jest';

import Error404Page from 'pages/Error404';

test('Matches shallow snapshot', () => {
  snapshot(
    <GlobalStateProvider initialState={{}}>
      <Error404Page />
    </GlobalStateProvider>,
  );
});
