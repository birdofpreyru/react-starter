/**
 * __@jest-environment @dr.pogodin/react-utils/jest-e2e-ssr-env
 * @webpack-config-factory ./config/webpack/development.js
 * @webpack-config-options {
 *  "entry": "./__assets__/index.js",
 *  "dontUseHmr": true,
 *  "dontUseProgressPlugin": true,
 *  "dontUseReactGlobalStateDebugging": true }
 * @ssr-options { "entry": "./__assets__/Scene.jsx" }
 */

// This test both tests that the examples listing is correctly rendered both in
// SSR and client-side, and it also tests that E2eSsrEnv Jest environment works
// fine outside the react-utils.

import { act, getGlobal } from '@dr.pogodin/react-utils/jest';

const global = getGlobal();

// Fails after update of E2eSsrEnv to throw on Webpack compilation failures,
// as the current setup fails to build SASS because it can't correctly resolve
// aliased paths, like "styles/mixins", etc.
// It is related to: https://github.com/birdofpreyru/react-utils/issues/263
it.skip('performs correct SSR and client-side hydration', async () => {
  document.write(global.ssrMarkup!);
  const view = document.querySelector('#react-view')!.innerHTML;
  expect(view).toMatchSnapshot();
  const outputPath = global.webpackConfig!.output!.path;
  const js = global.webpackOutputFs.readFileSync(
    `${outputPath}/main.js`,
    'utf8',
  ) as string;
  await act(() => new Function(js)()); // eslint-disable-line no-new-func
  expect(document.querySelector('#react-view')!.innerHTML).toBe(view);
});
