/**
 * The list of examples included into the starter pack.
 */

import {
  _,
  Link,
  PageLayout,
  PT,
} from '@dr.pogodin/react-utils';

export default function Content({ match }) {
  const path = _.trimEnd(match.url, '/');
  return (
    <PageLayout>
      <h1>Dr. Pogodin&apos;s React Starter</h1>
      <ul>
        <li><Link to={`${path}/api-client`}>API (HTTP) client</Link></li>
        <li>
          <Link to={`${path}/async-global-data`}>
            Async Global Data
          </Link>
        </li>
        <li><Link to={`${path}/buttons`}>Buttons</Link></li>
        <li><Link to={`${path}/global-state`}>Global State</Link></li>
        <li>
          <Link to={`${path}/input-form-components`}>
            Input Form Components
          </Link>
        </li>
        <li><Link to={`${path}/modal`}>Modal</Link></li>
        <li><Link to={`${path}/page-layout`}>Page layout</Link></li>
        <li><Link to={`${path}/react-themes`}>React themes</Link></li>
        <li><Link to={`${path}/svg`}>SVG Demo</Link></li>
        <li>
          <Link to={`${path}/throbber`}>
            Throbber (activity indicator)
          </Link>
        </li>
        <li>
          <Link to={`${path}/tooltip`}>
            Tooltip
          </Link>
        </li>
        <li><Link to={`${path}/youtube-video`}>YouTube video</Link></li>
      </ul>
    </PageLayout>
  );
}

Content.propTypes = {
  match: PT.shape({
    url: PT.string.isRequired,
  }).isRequired,
};
