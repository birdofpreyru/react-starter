/**
 * Demo of SVG rendering.
 */

import {
  Link,
  PageLayout,
  PT,
  url,
} from '@dr.pogodin/react-utils';

import Logo from './logo.svg';

export default function Svg({ match }) {
  return (
    <PageLayout>
      <Link to={url.parent(match.url)}>&lArr; Content</Link>
      <h1>SVG Demo</h1>
      <Logo />
    </PageLayout>
  );
}

Svg.propTypes = {
  match: PT.shape({
    url: PT.string.isRequired,
  }).isRequired,
};
