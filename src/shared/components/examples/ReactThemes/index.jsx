import React from 'react';

import {
  Link,
  PT,
  themed,
  ThemeProvider,
  url,
} from '@dr.pogodin/react-utils';

import ThemedComponent from './ThemedComponent';

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
          themePriority={themed.PRIORITY.ADHOC_DEFAULT_CONTEXT}
        />
        <ThemedComponent
          label="Purple"
          themePriority={themed.PRIORITY.ADHOC_DEFAULT_CONTEXT}
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
