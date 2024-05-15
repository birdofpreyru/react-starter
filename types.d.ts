declare module '*.jpg' {
  export default string;
}

declare module '*.png' {
  export default string;
}

declare module '*.svg' {
  import type { ComponentType, SVGAttributes } from 'react';

  const component: ComponentType<SVGAttributes>;

  export default component;
}

// TODO: Can we automatically pick it up from the utility library?
declare namespace React {
  // This allows all JSX elements to have additional "styleName" attribute,
  // handled by "@dr.pogodin/babel-plugin-react-css-modules".
  interface Attributes {
    styleName?: string;
  }
}
