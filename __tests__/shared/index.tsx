/** @jest-environment jsdom */

import type * as ReactUtilsM from '@dr.pogodin/react-utils';
import { snapshot } from '@dr.pogodin/react-utils/jest';
import { jest, test } from '@jest/globals';

let mockDevFrontendMode = false;

jest.unstable_mockModule<typeof ReactUtilsM>('@dr.pogodin/react-utils', async () => {
  // @ts-expect-error "Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature."
  global.REACT_UTILS_INJECTION = {
    CHUNK_GROUPS: {
      'code-split-example': [],
      'react-examples': [],
    },
  };
  const { ...TRU } = await import('@dr.pogodin/react-utils');
  return {
    ...TRU,
    isDevBuild: () => mockDevFrontendMode,
  };
});

// TODO: This does not work now, because new snapshot() implementation
// attempt to render into virtual DOM, which does not quite work unless
// the app is correctly initialized... will do later.
test.skip('Matches shallow snapshot', async () => {
  const Application = (await import('shared/app')).default;
  void snapshot(<Application />);
});

test.skip('Matches shallow snapshot in dev mode', async () => {
  mockDevFrontendMode = true;
  const Application = (await import('shared/app')).default;
  void snapshot(<Application />);
});
