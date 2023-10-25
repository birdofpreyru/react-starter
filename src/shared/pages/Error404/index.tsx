// Simple 404 error page.

import { getSsrContext, PageLayout } from '@dr.pogodin/react-utils';

const Error404Page: React.FunctionComponent = () => {
  const ssrContext = getSsrContext(false);
  if (ssrContext) ssrContext.status = 404;
  return (
    <PageLayout>
      <h1>Error 404: Requested resource is not found.</h1>
    </PageLayout>
  );
};

export default Error404Page;
