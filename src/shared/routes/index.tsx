/**
 * Root router of the app.
 */

import { Throbber, splitComponent } from '@dr.pogodin/react-utils';

const Examples = splitComponent({
  chunkName: 'react-examples',
  getComponent:
    async () => import(/* webpackChunkName: 'react-examples' */ './examples'),
  placeholder: <Throbber />,
});

const AppRoutes: React.FunctionComponent = () => <Examples />;

export default AppRoutes;
