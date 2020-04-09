import Error404Page from 'pages/Error404';
import React from 'react';
import { JU } from '@dr.pogodin/react-utils';

test('Matches shallow snapshot', () => {
  JU.shallowSnapshot(<Error404Page />);
});
