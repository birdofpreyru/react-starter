import {
  Link,
  PageLayout,
  PT,
  themed,
  ThemeProvider,
  url,
} from '@dr.pogodin/react-utils';

import ThemedComponentOLD from './ThemedComponentOLD';

import contextTheme from './ThemedComponentOLD/context.scss';
import adhocTheme from './ThemedComponentOLD/adhoc.scss';

export default function ReactThemes({ match }) {
  return (
    <PageLayout>
      <Link to={url.parent(match.url)}>&lArr; Content</Link>
      <h1>React Themes</h1>
      <ThemedComponentOLD label="Green" />
      <ThemedComponentOLD label="Blue" theme={contextTheme} />
      <ThemedComponentOLD label="Purple" theme={adhocTheme} />
      <br />
      <ThemeProvider themes={{ ThemedComponent: contextTheme }}>
        <ThemedComponentOLD label="Blue" />
        <ThemedComponentOLD label="Purple" theme={adhocTheme} />
      </ThemeProvider>
      <br />
      <ThemeProvider themes={{ ThemedComponent: adhocTheme }}>
        <ThemeProvider themes={{ ThemedComponent: contextTheme }}>
          <ThemedComponentOLD label="Blue" />
          <ThemedComponentOLD label="Purple" theme={adhocTheme} />
        </ThemeProvider>
      </ThemeProvider>
      <br />
      <ThemeProvider themes={{ ThemedComponent: contextTheme }}>
        <ThemedComponentOLD
          label="Green"
          themePriority={themed.PRIORITY.ADHOC_DEFAULT_CONTEXT}
        />
        <ThemedComponentOLD
          label="Purple"
          themePriority={themed.PRIORITY.ADHOC_DEFAULT_CONTEXT}
          theme={adhocTheme}
        />
      </ThemeProvider>
    </PageLayout>
  );
}

ReactThemes.propTypes = {
  match: PT.shape({
    url: PT.string.isRequired,
  }).isRequired,
};
