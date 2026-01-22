import type { FunctionComponent } from 'react';

import { type THEME_PRIORITY, type Theme, useTheme } from '@dr.pogodin/react-utils';

import defaultTheme from './default.scss';

type PropsT = {
  label: string;
  theme?: Theme<'container' | 'content'>;
  themePriority?: THEME_PRIORITY;
};

const Component: FunctionComponent<PropsT> = ({
  label,
  theme,
  themePriority,
}) => {
  const composed = useTheme('ThemedComponent', defaultTheme, theme, {
    themePriority,
  });
  return (
    <div className={composed.container}>
      <div className={composed.content}>
        {label}
      </div>
    </div>
  );
};

export default Component;
