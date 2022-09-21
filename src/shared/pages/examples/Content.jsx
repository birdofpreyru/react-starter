/**
 * The list of examples included into the starter pack.
 */

import { Link, PageLayout } from '@dr.pogodin/react-utils';

export default function Content() {
  return (
    <PageLayout>
      <h1>Dr. Pogodin&apos;s React Starter</h1>
      <ul>
        <li><Link to="api-client">API (HTTP) client</Link></li>
        <li><Link to="async-global-data">Async global data</Link></li>
        <li><Link to="code-splitting">Code splitting</Link></li>
        <li><Link to="buttons">Buttons</Link></li>
        <li><Link to="global-state">Global state</Link></li>
        <li><Link to="input-form-components">Input form components</Link></li>
        <li><Link to="links">Link tests</Link></li>
        <li><Link to="modal">Modal</Link></li>
        <li><Link to="page-layout">Page layout</Link></li>
        <li><Link to="react-themes">React themes</Link></li>
        <li><Link to="svg">SVG demo</Link></li>
        <li><Link to="throbber">Throbber (activity indicator)</Link></li>
        <li><Link to="tooltip">Tooltip</Link></li>
        <li><Link to="youtube-video">YouTube video</Link></li>
      </ul>
    </PageLayout>
  );
}
