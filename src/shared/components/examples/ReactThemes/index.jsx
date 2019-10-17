import React from 'react';

import {
  Link,
  PT,
  url,
} from '@dr.pogodin/react-utils';

import {
  COMPATIBILITY_MODE,
  COMPOSE,
  PRIORITY,
  ThemeProvider,
  setCompatibilityMode,
} from '@dr.pogodin/react-themes';

import ThemedComponent from './ThemedComponent';

import defaultTheme from './ThemedComponent/default.scss';
import contextTheme from './ThemedComponent/context.scss';
import adhocTheme from './ThemedComponent/adhoc.scss';

export default function ReactThemes({ match }) {
  return (
    <div>
      <Link to={url.parent(match.url)}>&lArr; Content</Link>
      <h1>React Themes</h1>
      <ThemedComponent label="Green" />
      <ThemedComponent label="Blue" theme={contextTheme} />
      <ThemedComponent label="Purple" theme={adhocTheme} />
      <br />
      <ThemeProvider theme={{ ThemedComponent: contextTheme }}>
        <ThemedComponent label="Blue" />
        <ThemedComponent label="Purple" theme={adhocTheme} />
      </ThemeProvider>
      <br />
      <ThemeProvider theme={{ ThemedComponent: adhocTheme }}>
        <ThemeProvider theme={{ ThemedComponent: contextTheme }}>
          <ThemedComponent label="Blue" />
          <ThemedComponent label="Purple" theme={adhocTheme} />
        </ThemeProvider>
      </ThemeProvider>
      <br />
      <ThemeProvider theme={{ ThemedComponent: contextTheme }}>
        <ThemedComponent
          label="Green"
          themePriority={PRIORITY.ADHOC_DEFAULT_CONTEXT}
        />
        <ThemedComponent
          label="Purple"
          themePriority={PRIORITY.ADHOC_DEFAULT_CONTEXT}
          theme={adhocTheme}
        />
      </ThemeProvider>
    </div>
  );
}

ReactThemes.propTypes = {
  match: PT.shape({
    url: PT.string.isRequired,
  }).isRequired,
};
