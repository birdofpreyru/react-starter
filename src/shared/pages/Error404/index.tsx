// Simple 404 error page.

import type { FunctionComponent } from 'react';

import { PageLayout, useSsrContext } from '@dr.pogodin/react-utils';

const Error404Page: FunctionComponent = () => {
  const ssrContext = useSsrContext(false);

  // eslint-disable-next-line react-hooks/immutability
  if (ssrContext) ssrContext.status = 404;

  return (
    <PageLayout>
      <h1>Error 404: Requested resource is not found.</h1>
    </PageLayout>
  );
};

export default Error404Page;
