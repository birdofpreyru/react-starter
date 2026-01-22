/**
 * Example of API client usage.
 * `api` is just an alias for
 * [axios](https://www.npmjs.com/package/axios) library.
 */

import axios from 'axios';
import { useEffect, useState } from 'react';

import { Link, PageLayout, getConfig } from '@dr.pogodin/react-utils';

type StateT = {
  get?: string;
  post?: string;
};

const ApiClient: React.FunctionComponent = () => {
  const [data, setData] = useState<StateT>({});
  useEffect(() => {
    void axios.get('/__api__/example')
      .then((res) => {
        const get = JSON.stringify(res, null, 2);
        setData((prev) => ({ ...prev, get }));
      });
    void axios.post('/__api__/example', {
      _csrf: getConfig(true).CSRF,
      key: 'value',
    }).then((res) => {
      const post = JSON.stringify(res, null, 2);
      setData((prev) => ({ ...prev, post }));
    });
  }, []);

  return (
    <PageLayout>
      <Link to="..">&lArr; Content</Link>
      <h1>API (HTTP) Client</h1>
      <ul>
        <li><Link to="#get-test">GET Test</Link></li>
        <li><Link to="#post-test">POST Test</Link></li>
      </ul>
      <h3 id="get-test">GET Test</h3>
      <pre>{ data.get ?? 'Testing...' }</pre>
      <h3 id="post-test">POST Test</h3>
      <pre>{ data.post ?? 'Testing...' }</pre>
    </PageLayout>
  );
};

export default ApiClient;
