import { type RgsApi, Button, Rgs } from '@dr.pogodin/react-utils';

import { type StateT } from './FirstChild';

const { useGlobalState } = Rgs as RgsApi<StateT>;

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
