import Application from 'shared';

const { JU } = jest.requireActual('@dr.pogodin/react-utils');

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

test('Matches shallow snapshot', () => {
  JU.shallowSnapshot(<Application />);
});

test('Matches shallow snapshot in dev mode', () => {
  mockDevFrontendMode = true;
  JU.shallowSnapshot(<Application />);
});
