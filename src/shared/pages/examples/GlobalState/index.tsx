import {
  GlobalStateProvider,
  Link,
  PageLayout,
} from '@dr.pogodin/react-utils';

import FirstChild from './FirstChild';
import SecondChild from './SecondChild';

export default function GlobalState() {
  return (
    <PageLayout>
      <Link to="..">&lArr; Content</Link>
      <h1>Global State Test </h1>
      <GlobalStateProvider initialState={{}}>
        <FirstChild />
        <SecondChild />
      </GlobalStateProvider>
      <GlobalStateProvider initialState={{}}>
        <FirstChild />
        <SecondChild />
      </GlobalStateProvider>
    </PageLayout>
  );
}
