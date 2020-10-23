/**
 * Waiting icon.
 */

import {
  Link,
  PageLayout,
  PT,
  Throbber,
  url,
} from '@dr.pogodin/react-utils';

export default function WaitingIcon({ match }) {
  return (
    <PageLayout>
      <Link to={url.parent(match.url)}>&lArr; Content</Link>
      <h1>Throbber (Activity Indicator)</h1>
      <br />
      <Throbber />
    </PageLayout>
  );
}

WaitingIcon.propTypes = {
  match: PT.shape({
    url: PT.string.isRequired,
  }).isRequired,
};
