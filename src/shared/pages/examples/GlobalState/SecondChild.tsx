import { Button, withGlobalStateType } from '@dr.pogodin/react-utils';

import { type StateT } from './FirstChild';

const { useGlobalState } = withGlobalStateType<StateT>();

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
