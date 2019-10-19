/**
 * The list of examples included into the starter pack.
 */

import _ from 'lodash';
import React from 'react';
import { Link, PT } from '@dr.pogodin/react-utils';

export default function Content({ match }) {
  const path = _.trimEnd(match.url, '/');
  return (
    <div>
      <h1>Dr. Pogodin&apos;s React Starter</h1>
      <ul>
        <li><Link to={`${path}/api-client`}>API (HTTP) Client</Link></li>
        <li><Link to={`${path}/react-themes`}>React Themes</Link></li>
        <li>
          <Link to={`${path}/throbber`}>
            Throbber (Activity Indicator)
          </Link>
        </li>
      </ul>
    </div>
  );
}

Content.propTypes = {
  match: PT.shape({
    url: PT.string.isRequired,
  }).isRequired,
};
