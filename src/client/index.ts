// Note: We don't use "import" statements here, as they would require
// to check import.meta.webpackHot below for isHmrEnabled check,
// and that's break Jest tests, which do not support ES modules yet.

import type * as ReactUtilsClientM from '@dr.pogodin/react-utils/client';

import type * as SharedM from '../shared';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { launchClient } = require('@dr.pogodin/react-utils/client') as typeof ReactUtilsClientM;

// eslint-disable-next-line @typescript-eslint/no-require-imports
const Application = (require('../shared') as typeof SharedM).default;

// TODO: Can we improve it?
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
const isHmrEnabled = !!(module as any).hot;

void launchClient(Application, {
  // With HMR hydration may throw hydration errors in subsequent re-renders.
  dontHydrate: isHmrEnabled,
});
