/**
 * Waiting icon.
 */

import { Link, PageLayout, Throbber } from '@dr.pogodin/react-utils';

export default function WaitingIcon() {
  return (
    <PageLayout>
      <Link to="..">&lArr; Content</Link>
      <h1>Throbber (Activity Indicator)</h1>
      <br />
      <Throbber />
    </PageLayout>
  );
}
