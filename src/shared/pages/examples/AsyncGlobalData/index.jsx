import React from 'react';

import {
  Link,
  PageLayout,
  PT,
  Throbber,
  time,
  url,
  useAsyncData,
} from '@dr.pogodin/react-utils';

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

export default function AsyncGlobalData({ match }) {
  return (
    <PageLayout>
      <Link to={url.parent(match.url)}>&lArr; Content</Link>
      <h1>Async Global Data</h1>
      <Demo />
    </PageLayout>
  );
}

AsyncGlobalData.propTypes = {
  match: PT.shape({
    url: PT.string.isRequired,
  }).isRequired,
};
