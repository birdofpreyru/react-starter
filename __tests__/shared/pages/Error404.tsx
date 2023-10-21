import { GlobalStateProvider, JU } from '@dr.pogodin/react-utils';

import Error404Page from 'pages/Error404';

test('Matches shallow snapshot', () => {
  JU!.snapshot(
    <GlobalStateProvider initialState={{}}>
      <Error404Page />
    </GlobalStateProvider>,
  );
});
