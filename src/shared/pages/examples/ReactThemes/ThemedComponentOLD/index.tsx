import { type Theme, PT, themed } from '@dr.pogodin/react-utils';

import defaultTheme from './default.scss';

type PropsT = {
  label: string;
  theme: Theme & {
    container?: string;
    content?: string;
  };
};

const Component: React.FunctionComponent<PropsT> = ({ label, theme }) => (
  <div className={theme.container}>
    <div className={theme.content}>
      {label}
    </div>
  </div>
);

const ThemedComponent = themed(Component, 'ThemedComponent', [
  'container',
  'content',
], defaultTheme);

Component.propTypes = {
  label: PT.string.isRequired,
  theme: ThemedComponent.themeType.isRequired,
};

export default ThemedComponent;
