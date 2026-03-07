import { type FunctionComponent, useState } from 'react';

import { Button, Link, PageLayout } from '@dr.pogodin/react-utils';

const Child: FunctionComponent = () => (
  <div>
    <title>Overriden Title</title>
    <meta content="Overriden Component Description" name="description"  />
  </div>
);

export const PureReact: FunctionComponent = () => {
  const [showChild, setShowChild] = useState(false);
  return (
    <PageLayout>
      <Link to="../react-helmet">&lArr; Content</Link>
      <h1>Pure React</h1>
      <title>My Title</title>
      <link href="http://mysite.com/example" rel="canonical" />
      <meta charSet="utf-8" />
      <meta content="Some Component" name="description" />
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
