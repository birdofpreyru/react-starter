/**
 * Root component of the app.
 */

import React from 'react';
import Routes from 'routes';

import {
  hooks,
  MetaTags,
  Tooltip,
} from '@dr.pogodin/react-utils';

export default function Application() {
  const [state] = hooks.useGlobalState();
  console.log('GLOBAL STATE', state);

  return (
    <>
      <MetaTags
        title="Dr. Pogodin's React Starter"
        description="Yet another webapp based on Dr. Pogodin's React Starter Kit"
      />
      <Tooltip />
      <Routes />
    </>
  );
}
