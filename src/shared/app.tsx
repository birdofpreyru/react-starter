/**
 * Root component of the app.
 */

import { MetaTags } from '@dr.pogodin/react-utils';

import Routes from 'routes';

const Application: React.FunctionComponent = () => (
  <MetaTags
    title="Dr. Pogodin's React Starter"
    description="Yet another webapp based on Dr. Pogodin's React Starter Kit"
  >
    <Routes />
  </MetaTags>
);

export default Application;
