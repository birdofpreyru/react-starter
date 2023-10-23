import { type RgsApi, Rgs } from '@dr.pogodin/react-utils';

export type StateT = {
  test: {
    firstChild: number;
  };
};

const { useGlobalState } = Rgs as RgsApi<StateT>;

export default function FirstChild() {
  const [value] = useGlobalState('test.firstChild', 0);
  return (
    <div>
      <h3>First Child</h3>
      Value: {value}
    </div>
  );
}
