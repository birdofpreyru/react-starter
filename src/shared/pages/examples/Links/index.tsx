import { Link, PageLayout } from '@dr.pogodin/react-utils';

const LinkTests: React.FunctionComponent = () => (
  <PageLayout>
    <Link to="..">&lArr; Content</Link>
    <h1>Link Tests</h1>
    <Link to="down">Relative link (down)</Link><br />
    <Link to="">Relative link (up)</Link><br />
    <Link to="https://dr.pogodin.studio">External Link</Link><br />
    <Link to="" enforceA>Relative link with enforceA</Link><br />
    <Link to="" openNewTab>Relative link with openNewTab</Link><br />
    <Link disabled to="down">Disabled relative link (down)</Link>
  </PageLayout>
);

export default LinkTests;
