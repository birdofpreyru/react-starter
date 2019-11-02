import React from 'react';

import {
  GlobalStateProvider,
  Link,
  PageLayout,
  PT,
  url,
} from '@dr.pogodin/react-utils';

import FirstChild from './FirstChild';
import SecondChild from './SecondChild';

export default function GlobalState({ match }) {
  return (
    <PageLayout>
      <Link to={url.parent(match.url)}>&lArr; Content</Link>
      <h1>Global State Test </h1>
      <GlobalStateProvider>
        <FirstChild />
        <SecondChild />
      </GlobalStateProvider>
      <GlobalStateProvider>
        <FirstChild />
        <SecondChild />
      </GlobalStateProvider>
    </PageLayout>
  );
}

GlobalState.propTypes = {
  match: PT.shape({
    url: PT.string.isRequired,
  }).isRequired,
};
