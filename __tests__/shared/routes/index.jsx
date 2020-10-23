import Routes from 'routes';
import { JU } from '@dr.pogodin/react-utils';

test('Matches shallow snapshot', () => {
  JU.shallowSnapshot(<Routes />);
});
