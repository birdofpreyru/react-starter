/**
 * Root router of the app.
 */

import { Route, Switch } from 'react-router-dom';

import { CodeSplit, Throbber } from '@dr.pogodin/react-utils';

import Error404 from 'pages/Error404';

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

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Examples} />
      <Error404 />
    </Switch>
  );
}
