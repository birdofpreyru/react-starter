import React from 'react';

import { PT } from '@dr.pogodin/react-utils';

import themed, { COMPOSE, PRIORITY } from '@dr.pogodin/react-themes';

import defaultTheme from './default.scss';

function ThemedComponent({ label, theme }) {
  return (
    <div className={theme.container}>
      <div className={theme.content}>
        {label}
      </div>
    </div>
  );
}

ThemedComponent.propTypes = {
  label: PT.string.isRequired,
  theme: PT.shape({
    container: PT.string,
    content: PT.string,
  }).isRequired,
};

export default themed('ThemedComponent', defaultTheme)(ThemedComponent);
