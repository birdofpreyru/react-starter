/**
 * Root router of the app.
 */

import type { FunctionComponent } from 'react';

import { Throbber, splitComponent } from '@dr.pogodin/react-utils';

const Examples = splitComponent({
  chunkName: 'react-examples',
  getComponent:
    async () => import(/* webpackChunkName: 'react-examples' */ './examples'),
  placeholder: <Throbber />,
});

const AppRoutes: FunctionComponent = () => <Examples />;

export default AppRoutes;
