import { JU } from '@dr.pogodin/react-utils';

import Routes from 'routes';

test('Matches shallow snapshot', () => {
  JU.shallowSnapshot(<Routes />);
});
