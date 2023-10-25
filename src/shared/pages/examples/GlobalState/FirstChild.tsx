import { withGlobalStateType } from '@dr.pogodin/react-utils';

export type StateT = {
  test: {
    firstChild: number;
  };
};

const { useGlobalState } = withGlobalStateType<StateT>();

const FirstChild: React.FunctionComponent = () => {
  const [value] = useGlobalState('test.firstChild', 0);
  return (
    <div>
      <h3>First Child</h3>
      Value: {value}
    </div>
  );
};

export default FirstChild;
