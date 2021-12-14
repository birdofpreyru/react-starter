/**
 * A simple CodeSplit use example.
 */

import {
  CodeSplit,
  Link,
  PageLayout,
  Throbber,
} from '@dr.pogodin/react-utils';

export default function CodeSplitExample() {
  return (
    <PageLayout>
      <Link to="..">&lArr; Content</Link>
      <h1>CodeSplit Test</h1>
      <CodeSplit
        chunkName="code-split-example"
        getComponentAsync={
          () => import(
            /* webpackChunkName: 'code-split-example' */
            './Component'
          )
        }
        getComponentServer={(rr) => rr(__dirname, './Component')}
        placeholder={Throbber}
      />
    </PageLayout>
  );
}
