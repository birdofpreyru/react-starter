import { type ThemeT, themedComponent } from '@dr.pogodin/react-utils';

import defaultTheme from './default.scss';

type PropsT = {
  label: string;
  theme: ThemeT;
};

function Component({ label, theme }: PropsT) {
  return (
    <div className={theme.container}>
      <div className={theme.content}>
        {label}
      </div>
    </div>
  );
}

export default themedComponent('ThemedComponent', Component, defaultTheme);
