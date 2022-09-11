// Simple 404 error page.

import { getSsrContext } from '@dr.pogodin/react-utils';

export default function Error404Page() {
  const ssrContext = getSsrContext(false);
  if (ssrContext) ssrContext.status = 404;
  return (
    <h1>
      Error 404: Requested resource is not found.
    </h1>
  );
}
