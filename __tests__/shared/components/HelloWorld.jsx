import HelloWorld from 'components/HelloWorld';
import React from 'react';
import { JU } from '@dr.pogodin/react-utils';

test('Matches shallow snapshot', () => {
  JU.shallowSnapshot(<HelloWorld />);
});
