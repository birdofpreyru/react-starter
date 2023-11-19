import {
  type AsyncDataEnvelopeT,
  Link,
  PageLayout,
  Throbber,
  time,
  withGlobalStateType,
} from '@dr.pogodin/react-utils';

type StateT = {
  examples: {
    asyncGlobalData: AsyncDataEnvelopeT<string>;
  };
};

const { useAsyncData } = withGlobalStateType<StateT>();

const Demo: React.FunctionComponent = () => {
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
};

const AsyncGlobalData: React.FunctionComponent = () => (
  <PageLayout>
    <Link to="..">&lArr; Content</Link>
    <h1>Async Global Data</h1>
    <Demo />
  </PageLayout>
);

export default AsyncGlobalData;
