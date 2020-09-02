import React from 'react';

import { useGlobalState } from '@dr.pogodin/react-utils';

export default function FirstChild() {
  const [value] = useGlobalState('test.firstChild', 0);
  return (
    <div>
      <h3>First Child</h3>
      Value: {value}
    </div>
  );
}
