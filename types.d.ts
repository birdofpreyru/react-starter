// eslint-disable-next-line no-var
declare var KEEP_BUILD_INFO: boolean | object;

declare module '*.jpg' {
  const path: string;
  export default path;
}

declare module '*.png' {
  const path: string;
  export default path;
}

declare module '*.svg' {
  import type { ComponentType, Ref, SVGAttributes } from 'react';

  const component: ComponentType<SVGAttributes<HTMLElement>> & {
    ref: Ref<SVGElement>;
  };

  export default component;
}

// TODO: Can we automatically pick it up from the utility library?
declare namespace React {
  // This allows all JSX elements to have additional "styleName" attribute,
  // handled by "@dr.pogodin/babel-plugin-react-css-modules".
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Attributes {
    styleName?: string;
  }
}
