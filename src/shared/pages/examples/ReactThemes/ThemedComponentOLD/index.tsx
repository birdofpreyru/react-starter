import { type Theme, PT, themed } from '@dr.pogodin/react-utils';

import defaultTheme from './default.scss';

const validThemeKeys = ['container', 'content'] as const;

type PropsT = {
  label: string;
  theme: Theme<typeof validThemeKeys>;
};

const Component: React.FunctionComponent<PropsT> = ({ label, theme }) => (
  <div className={theme.container}>
    <div className={theme.content}>
      {label}
    </div>
  </div>
);

const ThemedComponent = themed(
  Component,
  'ThemedComponent',
  validThemeKeys,
  defaultTheme,
);

Component.propTypes = {
  label: PT.string.isRequired,
  theme: ThemedComponent.themeType.isRequired,
};

export default ThemedComponent;
