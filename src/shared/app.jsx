/**
 * Root component of the app.
 */

import React from 'react';
import Routes from 'routes';

import {
  MetaTags,
  Tooltip,
} from '@dr.pogodin/react-utils';

export default function Application() {
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
