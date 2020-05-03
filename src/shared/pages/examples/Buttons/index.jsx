/* global alert */

import React from 'react';

import {
  config,
  Button,
  Link,
  PageLayout,
  PT,
  ThemeProvider,
  url,
} from '@dr.pogodin/react-utils';

import adhocTheme from './adhoc-theme.scss';
import contextTheme from './context-theme.scss';

const codeExample01 = `\
import { Button } from '@dr.pogodin/react-utils';

export default function ButtonsDemo() {
  return (
    <div>
      <Button onClick={() => alert('Button Clicked')}>Button</Button>
      <Button to="https://dr.pogodin.studio" openNewTab>
        Button-Like Link
      </Button>
      <Button disabled>Disabled Button</Button>
      <Button active>Forced-Active Button</Button>
    </div>
  );
}`;

const codeExample02 = `\
import { Button } from '@dr.pogodin/react-utils';

export default function ButtonsDemo() {
  return (
    <div>
      <Button size="xs">Button</Button>
      <Button size="sm">Button</Button>
      <Button size="md">Button (Default)</Button>
      <Button size="lg">Button</Button>
      <Button size="xl">Button</Button>
    </div>
  );
}`;

const codeExample03 = `\
// adhoc-theme.scss

*,
.context,
.ad.hoc {
  &.button {
    color: red;
    font-weight: bold;
  }
}`;

const codeExample04 = `\
// ButtonsDemo.jsx

import { Button } from '@dr.pogodin/react-utils';
import adhocTheme from './adhoc-theme.scss';

export default function ButtonsDemo() {
  return (
    <div>
      <Button theme={adhocTheme}>Button</Button>
      <Button
        theme={adhocTheme}
        to="https://dr.pogodin.studio"
        openNewTab
      >
        Button-Like Link
      </Button>
      <Button disabled theme={adhocTheme}>Disabled Button</Button>
      <Button active theme={adhocTheme}>Forced-Active Button</Button>
    </div>
  );
}`;

const codeExample05 = `\
// context-theme.scss

*,
.context,
.ad.hoc {
  &.button {
    background: royalblue;
    border-radius: 24px;
    color: white;
  }
}`;

const codeExample06 = `\
// ButtonsDemo.jsx

import { Button, ThemeProvider } from '@dr.pogodin/react-utils';
import contextTheme from './context-theme.scss';

export default function ButtonsDemo() {
  return (
    <div>
      <ThemeProvider themes={{ Button: contextTheme }}>
        <Button>Button</Button>
        <Button to="https://dr.pogodin.studio" openNewTab>
          Button-Like Link
        </Button>
        <Button disabled>Disabled Button</Button>
        <Button active>Forced-Active Button</Button>
      </ThemeProvider>
    </div>
  );
}`;

export default function ButtonsDemo({ match }) {
  return (
    <PageLayout>
      <Link to={url.parent(match.url)}>&lArr; Content</Link>
      <h1>Buttons</h1>
      <p>
        <Link to={`${config.DOCS_BASE}/button.md`} openNewTab>
          Full Reference
        </Link>
      </p>
      <h3>Basic Button Example</h3>
      <Button onClick={() => alert('Button Clicked')}>Button</Button>
      <Button to="https://dr.pogodin.studio" openNewTab>
        Button-Like Link
      </Button>
      <Button disabled>Disabled Button</Button>
      <Button active>Forced-Active Button</Button>
      <pre>{codeExample01}</pre>

      <h3>Buttons of Different Size</h3>
      <Button size="xs">Button</Button>
      <Button size="sm">Button</Button>
      <Button size="md">Button (Default)</Button>
      <Button size="lg">Button</Button>
      <Button size="xl">Button</Button>
      <pre>{codeExample02}</pre>

      <h3>Button Styling</h3>

      <h5>With <em>Ad Hoc</em> Themes</h5>
      <Button theme={adhocTheme}>Button</Button>
      <Button
        theme={adhocTheme}
        to="https://dr.pogodin.studio"
        openNewTab
      >
        Button-Like Link
      </Button>
      <Button disabled theme={adhocTheme}>Disabled Button</Button>
      <Button active theme={adhocTheme}>Forced-Active Button</Button>
      <pre>{codeExample04}</pre>
      <pre>{codeExample03}</pre>

      <h5>With Context Themes</h5>
      <ThemeProvider themes={{ Button: contextTheme }}>
        <Button>Button</Button>
        <Button to="https://dr.pogodin.studio" openNewTab>
          Button-Like Link
        </Button>
        <Button disabled>Disabled Button</Button>
        <Button active>Forced-Active Button</Button>
      </ThemeProvider>
      <pre>{codeExample06}</pre>
      <pre>{codeExample05}</pre>
    </PageLayout>
  );
}

ButtonsDemo.propTypes = {
  match: PT.shape({
    url: PT.string.isRequired,
  }).isRequired,
};
