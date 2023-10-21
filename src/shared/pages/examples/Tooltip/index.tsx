import {
  Button,
  Link,
  PageLayout,
  WithTooltip,
} from '@dr.pogodin/react-utils';

import './styles.scss';

import theme from './tooltip.theme.scss';

export default function TooltipExample() {
  const buttons = [];
  for (let i = 0; i < 100; i += 1) {
    buttons.push((
      <div key={i}>
        <WithTooltip
          placement={WithTooltip.PLACEMENTS.ABOVE_ELEMENT}
          theme={theme}
          tip={
            <>Just a sample button<br />with tooltip</>
          }
        >
          <Button>A Button</Button>
        </WithTooltip>
      </div>
    ));
  }

  return (
    <PageLayout>
      <Link to="..">&lArr; Content</Link>
      <h1>Tooltip</h1>
      <div styleName="content">
        <div styleName="buttons">{buttons}</div>
        <div styleName="buttons">{buttons}</div>
      </div>
    </PageLayout>
  );
}
