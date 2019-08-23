/**
 * Root component of the app.
 */

import React from 'react';
import Routes from 'routes';

import { DevTools, MetaTags, isomorphy } from '@dr.pogodin/react-utils';

export default function Application() {
  return (
    <div>
      <MetaTags
        title="Dr. Pogodin's React Starter"
        description="Yet another webapp based on Dr. Pogodin's React Starter Kit"
      />
      <Routes />
      { isomorphy.isDevBuild() ? <DevTools /> : undefined }
    </div>
  );
}
