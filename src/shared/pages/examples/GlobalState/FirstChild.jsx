import React from 'react';

import { hooks } from '@dr.pogodin/react-utils';

export default function FirstChild() {
  const [value] = hooks.useGlobalState('test.firstChild', 0);
  return (
    <div>
      <h3>First Child</h3>
      Value: {value}
    </div>
  );
}
