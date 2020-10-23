/**
 * Root router of the app.
 */

import { Route, Switch } from 'react-router-dom';

import { CodeSplit, Throbber, webpack } from '@dr.pogodin/react-utils';

import Error404 from 'pages/Error404';

function Examples(props) {
  return (
    <CodeSplit
      chunkName="react-examples"
      getComponentAsync={
        () => import(/* webpackChunkName: 'react-examples' */ './examples')
      }
      getComponentServer={
        () => {
          const path = webpack.requireWeak('path');
          const p = webpack.resolveWeak('./examples');
          return webpack.requireWeak(path.resolve(__dirname, p));
        }
      }
      placeholder={Throbber}
      /* eslint-disable react/jsx-props-no-spreading */
      {...props}
      /* eslint-enable react/jsx-props-no-spreading */
    />
  );
}

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Examples} />
      <Error404 />
    </Switch>
  );
}
