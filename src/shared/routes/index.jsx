/**
 * Root router of the app.
 */

import { splitComponent, Throbber } from '@dr.pogodin/react-utils';

const Examples = splitComponent({
  chunkName: 'react-examples',
  getComponent:
    () => import(/* webpackChunkName: 'react-examples' */ './examples'),
  placeholder: <Throbber />,
});

export default function AppRoutes() {
  return <Examples />;
}
