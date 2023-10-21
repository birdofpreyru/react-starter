/**
 * Root component of the app.
 */

import { MetaTags } from '@dr.pogodin/react-utils';

import Routes from 'routes';

export default function Application() {
  return (
    <MetaTags
      title="Dr. Pogodin's React Starter"
      description="Yet another webapp based on Dr. Pogodin's React Starter Kit"
    >
      <Routes />
    </MetaTags>
  );
}
