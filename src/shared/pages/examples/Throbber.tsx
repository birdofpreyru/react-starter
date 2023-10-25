/**
 * Waiting icon.
 */

import { Link, PageLayout, Throbber } from '@dr.pogodin/react-utils';

const WaitingIcon: React.FunctionComponent = () => (
  <PageLayout>
    <Link to="..">&lArr; Content</Link>
    <h1>Throbber (Activity Indicator)</h1>
    <br />
    <Throbber />
  </PageLayout>
);

export default WaitingIcon;
