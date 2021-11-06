/**
 * Root router of the app.
 */

import { Route, Routes } from 'react-router-dom';

import { CodeSplit, Throbber } from '@dr.pogodin/react-utils';

function Examples(props) {
  return (
    <CodeSplit
      chunkName="react-examples"
      getComponentAsync={
        () => import(/* webpackChunkName: 'react-examples' */ './examples')
      }
      getComponentServer={(rr) => rr(__dirname, './examples')}
      placeholder={Throbber}
      /* eslint-disable react/jsx-props-no-spreading */
      {...props}
      /* eslint-enable react/jsx-props-no-spreading */
    />
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Examples />} />
    </Routes>
  );
}
