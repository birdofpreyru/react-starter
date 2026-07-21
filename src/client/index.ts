import { launchClient } from '@dr.pogodin/react-utils/client';

import Application from '../shared';

void launchClient(Application, {
  // With HMR hydration may throw hydration errors in subsequent re-renders.
  dontHydrate: !!import.meta.webpackHot,
});
