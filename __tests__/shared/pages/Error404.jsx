import Error404Page from 'pages/Error404';
import { GlobalStateProvider, JU } from '@dr.pogodin/react-utils';

test('Matches shallow snapshot', () => {
  JU.snapshot(
    <GlobalStateProvider>
      <Error404Page />
    </GlobalStateProvider>,
  );
});
