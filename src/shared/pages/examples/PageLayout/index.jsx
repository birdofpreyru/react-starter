import {
  config,
  Link,
  PageLayout,
  PT,
  url,
} from '@dr.pogodin/react-utils';

import pageTheme from './page-theme.scss';

const codeExample = `\
import { PageLayout } from '@dr.pogodin/react-utils';

export default function PageDemo() {
  return (
    <PageLayout>
      Your page content.
    </PageLayout>
  );
}`;

export default function PageLayoutDemo({ match }) {
  return (
    <PageLayout theme={pageTheme}>
      <Link to={url.parent(match.url)}>&lArr; Content</Link>
      <h1>Page Layout</h1>
      <pre>{codeExample}</pre>
      <Link to={`${config.DOCS_BASE}/page-layout.md`} openNewTab>
        Full Reference
      </Link>
      <p>
        Simple and configurable page layout, demonstrated by this entire page.
        It keeps the main content centered in a column of limited width, which
        fills entire viewport on small screens, and it is centered, and
        surrounded by side panels on large screens. Additional content
        can be shown in the side panels.
      </p>
      <p>
        The component is easily themeable, e.g. in this page <em>ad hoc</em>
        theming is used to show layout parts with thick borders of different
        colors (no borders are displayed by default).
      </p>
      <ul>
        <li>
          The red border shows layout container, which can be used to show
          a common background behind entire page.
        </li>
        <li>The green border shows the left side panel.</li>
        <li>The black border shows the main content panel.</li>
        <li>The blue border shows the right side panel.</li>
      </ul>
    </PageLayout>
  );
}

PageLayoutDemo.propTypes = {
  match: PT.shape({
    url: PT.string.isRequired,
  }).isRequired,
};
