/**
 * Waiting icon.
 */

import React from 'react';

import {
  Link,
  PT,
  Throbber,
  url,
} from '@dr.pogodin/react-utils';

export default function WaitingIcon({ match }) {
  return (
    <div>
      <Link to={url.parent(match.url)}>&lArr; Content</Link>
      <h1>Throbber (Activity Indicator)</h1>
      <Throbber />
    </div>
  );
}

WaitingIcon.propTypes = {
  match: PT.shape({
    url: PT.string.isRequired,
  }).isRequired,
};
