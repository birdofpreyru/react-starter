/** @jest-environment jsdom */

import { snapshot } from '@dr.pogodin/react-utils/jest';

import Routes from 'routes';

test('Matches shallow snapshot', () => {
  snapshot(<Routes />);
});
