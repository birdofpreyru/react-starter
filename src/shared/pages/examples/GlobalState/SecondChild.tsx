import { Button, withGlobalStateType } from '@dr.pogodin/react-utils';

import { type StateT } from './FirstChild';

const { useGlobalState } = withGlobalStateType<StateT>();

const SecondChild: React.FunctionComponent = () => {
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
};

export default SecondChild;
