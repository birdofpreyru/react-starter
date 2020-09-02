import React from 'react';

import { Button, useGlobalState } from '@dr.pogodin/react-utils';

export default function SecondChild() {
  const [value, setValue] = useGlobalState('test.firstChild', 0);
  return (
    <div>
      <h3>Second Child</h3>
      <Button
        onClick={
          () => setValue((value || 0) + 1)
        }
      >
        &uArr; Bump!
      </Button>
    </div>
  );
}
