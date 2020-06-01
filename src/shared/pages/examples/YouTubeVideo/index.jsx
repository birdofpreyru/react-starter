import React from 'react';

import {
  Link,
  PageLayout,
  PT,
  url,
  YouTubeVideo,
} from '@dr.pogodin/react-utils';

export default function YouTubeVideoExample({ match }) {
  return (
    <PageLayout>
      <Link to={url.parent(match.url)}>&lArr; Content</Link>
      <h1>YouTube video example</h1>
      <YouTubeVideo
        src="https://youtu.be/NdF6Rmt6Ado"
      />
    </PageLayout>
  );
}

YouTubeVideoExample.propTypes = {
  match: PT.shape({
    url: PT.string.isRequired,
  }).isRequired,
};
