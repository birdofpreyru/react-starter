import {
  Link,
  PageLayout,
  Throbber,
  time,
  withGlobalStateType,
} from '@dr.pogodin/react-utils';

type StateT = {
  examples: {
    asyncGlobalData: never;
  };
};

const { useAsyncData } = withGlobalStateType<StateT>();

function Demo() {
  const { data, loading } = useAsyncData(
    'examples.asyncGlobalData',
    async () => {
      await time.timer(3 * time.SEC_MS);
      return 'These are sample data!';
    },
    {
      maxage: 10 * time.SEC_MS,
    },
  );
  return (
    <div>
      { loading ? <Throbber /> : data }
    </div>
  );
}

export default function AsyncGlobalData() {
  return (
    <PageLayout>
      <Link to="..">&lArr; Content</Link>
      <h1>Async Global Data</h1>
      <Demo />
    </PageLayout>
  );
}
