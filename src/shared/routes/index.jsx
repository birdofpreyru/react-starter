/**
 * Root router of the app.
 */

import { splitComponent, Throbber, webpack } from '@dr.pogodin/react-utils';

const Examples = splitComponent({
  chunkName: 'react-examples',
  getClientSide: () => import(
    /* webpackChunkName: 'react-examples' */ './examples'
  ),
  placeholder: Throbber,
  serverSide: webpack.requireWeak('./examples', __dirname),
});

export default function AppRoutes() {
  return <Examples />;
}
