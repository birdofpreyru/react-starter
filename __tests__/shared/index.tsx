/** @jest-environment jsdom */

import Application from 'shared/app';

import { snapshot } from '@dr.pogodin/react-utils/jest';

let mockDevFrontendMode = false;

jest.mock('@dr.pogodin/react-utils', () => {
  const TRU = jest.requireActual('@dr.pogodin/react-utils');
  return {
    ...TRU,
    isomorphy: {
      ...TRU.isomorphy,
      isDevBuild: () => mockDevFrontendMode,
    },
  };
});

// TODO: This does not work now, because new snapshot() implementation
// attempt to render into virtual DOM, which does not quite work unless
// the app is correctly initialized... will do later.
test.skip('Matches shallow snapshot', () => {
  snapshot(<Application />);
});

test.skip('Matches shallow snapshot in dev mode', () => {
  mockDevFrontendMode = true;
  snapshot(<Application />);
});
