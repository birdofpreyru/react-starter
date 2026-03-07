import { type FunctionComponent, useState } from 'react';

import { Helmet } from '@dr.pogodin/react-helmet';
import { Button, Link, PageLayout } from '@dr.pogodin/react-utils';

const Child: FunctionComponent = () => (
  <Helmet>
    <title>Overriden Title</title>
    <meta content="Overriden Component Description" name="description"  />
  </Helmet>
);

export const DrPogodinReactHelmet: FunctionComponent = () => {
  const [showChild, setShowChild] = useState(false);
  return (
    <PageLayout>
      <Link to="../react-helmet">&lArr; Content</Link>
      <h1><code>@dr.pogodin/react-helmet</code></h1>
      <Helmet>
        <title>My Title</title>
        <link href="http://mysite.com/example" rel="canonical" />
        <meta charSet="utf-8" />
        <meta content="Some Component" name="description" />
      </Helmet>
      <div>
        Look into the page&apos;s head content!
      </div>
      {showChild ? (
        <>
          <Child />
          <Button
            onClick={() => {
              setShowChild(false);
            }}
          >
            Unmount child
          </Button>
        </>
      ) : (
        <Button
          onClick={() => {
            setShowChild(true);
          }}
        >
          Mount child
        </Button>
      )}
    </PageLayout>
  );
};
