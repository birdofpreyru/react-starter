import type { FunctionComponent } from 'react';

import { Link, PageLayout } from '@dr.pogodin/react-utils';

export * from './DrPogodinReactHelmet';
export * from './PureReact';
export * from './ReactHelmetAsyncV3';

export const ReactHelmetContent: FunctionComponent = () => {
  return (
    <PageLayout>
      <Link to="..">&lArr; Content</Link>
      <h1>React Helmet Examples / Tests</h1>
      <ul>
        <li><Link to="./pure-react">Pure React</Link></li>
        <li>
          <Link to="./dr-pogodin-react-helmet">
            <code>@dr.pogodin/react-helmet</code>
          </Link>
        </li>
        <li>
          <Link to="./react-helmet-async">
            <code>react-helmet-async</code>
          </Link>
        </li>
      </ul>
    </PageLayout>
  );
};
