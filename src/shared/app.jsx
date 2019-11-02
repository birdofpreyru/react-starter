/**
 * Root component of the app.
 */

import React from 'react';
import Routes from 'routes';

import {
  DevTools,
  GlobalStateProvider,
  MetaTags,
  isomorphy,
  Tooltip,
} from '@dr.pogodin/react-utils';

export default function Application() {
  return (
    <GlobalStateProvider>
      <MetaTags
        title="Dr. Pogodin's React Starter"
        description="Yet another webapp based on Dr. Pogodin's React Starter Kit"
      />
      <Tooltip />
      <Routes />
      { isomorphy.isDevBuild() ? <DevTools /> : undefined }
    </GlobalStateProvider>
  );
}
