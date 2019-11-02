/* global alert */

import React from 'react';

import {
  config,
  BaseButton,
  Button,
  Link,
  PageLayout,
  PT,
  themed,
  ThemeProvider,
  url,
} from '@dr.pogodin/react-utils';

import adhocTheme from './adhoc-theme.scss';
import contextTheme from './context-theme.scss';
import dangerButtonTheme from './danger-button-theme.scss';

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

const codeExample07 = `\
// danger-button-theme.scss

*,
.context,
.ad.hoc {
  /* Generic button of medium size. */
  &.button {
    align-items: center;
    background-image: linear-gradient(to top, lightcoral, white 50%, white);
    border: solid 1px lightcoral;
    border-radius: 3px;
    color: darkred;
    display: inline-flex;
    font: inherit;
    justify-content: center;
    min-height: 36px;
    margin: 6px;
    padding: 6px 24px;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
  }

  /* Additional styling of disabled buttons. */
  &.disabled {
    cursor: not-allowed;
    opacity: 0.33;
  }

  /* .link and .regular classes are applied only to active button-like links,
   * and real buttons (rendered as <button> elements). */
  &.link,
  &.regular {
    /* To prevent different styling of the button-like link once it has been
    * visited. */
    &:visited {
      color: darkred;
    }

    &:focus {
      box-shadow: 0 0 3px 1px lightcoral;
      border-color: red;
      outline: none;
    }

    &:hover {
      border-color: coral;
      cursor: pointer;
    }

    &.active,
    &:active {
      background-image: linear-gradient(to bottom, lightcoral, white 50%, white);
      box-shadow: inset 0 1px 3px 0 lightcoral;
      border-color: coral;
    }
  }

  /* Alternative button sizes. */
  &.xs {
    border-radius: 1px;
    min-height: 24px;
    padding: 1px 12px;
  }

  &.sm {
    border-radius: 1px;
    min-height: 30px;
    padding: 3px 18px;
  }

  &.lg {
    border-radius: 3px;
    min-height: 42px;
    padding: 9px 30px;
  }

  &.xl {
    border-radius: 6px;
    min-height: 48px;
    padding: 12px 36px;
  }
}`;

const codeExample08 = `\
// ButtonsDemo.jsx

import { Button, themed } from '@dr.pogodin/react-utils';
import dangerButtonTheme from './danger-button-theme.scss';

const DangerButton = themed('DangerButton', dangerButtonTheme)(BaseButton);

export default function ButtonsDemo() {
  return (
    <div>
      <DangerButton>Button</DangerButton>
      <DangerButton to="https://dr.pogodin.studio" openNewTab>
        Button-Like Link
      </DangerButton>
      <DangerButton disabled>Disabled Button</DangerButton>
      <DangerButton active>Forced-Active Button</DangerButton>
    </div>
  );
}`;

const DangerButton = themed('DangerButton', dangerButtonTheme)(BaseButton);

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

      <h5>With Custom Default Themes</h5>
      <DangerButton>Button</DangerButton>
      <DangerButton to="https://dr.pogodin.studio" openNewTab>
        Button-Like Link
      </DangerButton>
      <DangerButton disabled>Disabled Button</DangerButton>
      <DangerButton active>Forced-Active Button</DangerButton>
      <pre>{codeExample08}</pre>
      <pre>{codeExample07}</pre>
    </PageLayout>
  );
}

ButtonsDemo.propTypes = {
  match: PT.shape({
    url: PT.string.isRequired,
  }).isRequired,
};
