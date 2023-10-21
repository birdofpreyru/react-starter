// Note: We don't use "import" statements here, as they would require
// to check import.meta.webpackHot below for isHmrEnabled check,
// and that's break Jest tests, which do not support ES modules yet.

const { client } = require('@dr.pogodin/react-utils');

const Application = require('../shared').default;

const isHmrEnabled = !!(module as any).hot;

client(Application, {
  // With HMR hydration may throw hydration errors in subsequent re-renders.
  dontHydrate: isHmrEnabled,
});
