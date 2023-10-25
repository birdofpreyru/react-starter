/**
 * Demo of SVG rendering.
 */

import { Link, PageLayout } from '@dr.pogodin/react-utils';

import Logo from './logo.svg';

const Svg: React.FunctionComponent = () => (
  <PageLayout>
    <Link to="..">&lArr; Content</Link>
    <h1>SVG Demo</h1>
    <Logo />
  </PageLayout>
);

export default Svg;
