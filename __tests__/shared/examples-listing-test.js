/**
 * @jest-environment @dr.pogodin/react-utils/jest-e2e-ssr-env
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

// eslint-disable-next-line import/no-extraneous-dependencies
import { act } from 'react-dom/test-utils';

it('performs correct SSR and client-side hydration', async () => {
  document.write(global.ssrMarkup);
  const view = document.querySelector('#react-view').innerHTML;
  expect(view).toMatchSnapshot();
  const outputPath = global.webpackConfig.output.path;
  const js = global.webpackOutputFs.readFileSync(
    `${outputPath}/main.js`,
    'utf8',
  );
  await act(new Function(js)); // eslint-disable-line no-new-func
  expect(document.querySelector('#react-view').innerHTML).toBe(view);
});
