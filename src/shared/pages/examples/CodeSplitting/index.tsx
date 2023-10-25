// Code splitting example.

import {
  Link,
  PageLayout,
  splitComponent,
  Throbber,
} from '@dr.pogodin/react-utils';

const SplitComponent = splitComponent({
  chunkName: 'code-split-example',
  getComponent:
    () => import(/* webpackChunkName: 'code-split-example' */ './Component'),
  placeholder: <Throbber />,
});

const CodeSplittingExample: React.FunctionComponent = () => (
  <PageLayout>
    <Link to="..">&lArr; Content</Link>
    <h1>Code Splitting Example</h1>
    <SplitComponent />
  </PageLayout>
);

export default CodeSplittingExample;
