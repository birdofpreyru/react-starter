import React from 'react';

import {
  Button,
  Link,
  PageLayout,
  PT,
  url,
  WithTooltip,
} from '@dr.pogodin/react-utils';

import styles from './styles.scss';

export default function TooltipExample({ match }) {
  const buttons = [];
  for (let i = 0; i < 100; i += 1) {
    buttons.push((
      <div key={i}>
        <WithTooltip
          theme={{
            arrow: styles.arrow,
            tooltip: styles.tooltip,
          }}
          tip="Just a sample button with tooltip!"
        >
          <Button>A Button</Button>
        </WithTooltip>
      </div>
    ));
  }

  return (
    <PageLayout>
      <Link to={url.parent(match.url)}>&lArr; Content</Link>
      <h1>Tooltip</h1>
      <div styleName="content">
        {buttons}
      </div>
    </PageLayout>
  );
}

TooltipExample.propTypes = {
  match: PT.shape({
    url: PT.string.isRequired,
  }).isRequired,
};
