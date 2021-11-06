/**
 * Demo of SVG rendering.
 */

import { Link, PageLayout } from '@dr.pogodin/react-utils';

import Logo from './logo.svg';

export default function Svg() {
  return (
    <PageLayout>
      <Link to="..">&lArr; Content</Link>
      <h1>SVG Demo</h1>
      <Logo />
    </PageLayout>
  );
}
