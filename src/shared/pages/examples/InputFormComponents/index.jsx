import React from 'react';

import {
  Button,
  Checkbox,
  Dropdown,
  Input,
  Link,
  PageLayout,
  PT,
  url,
} from '@dr.pogodin/react-utils';

const SAMPLE_OPTIONS = [{
  name: 'Option #1',
  value: 'option1',
}, {
  name: 'Option #2',
  value: 'option2',
}, {
  value: 'option3',
},
'option #4',
];

export default function InputFormComponents({ match }) {
  return (
    <PageLayout>
      <Link to={url.parent(match.url)}>&lArr; Content</Link>
      <h1>Input Form Components</h1>
      <Button>Sample Button</Button>
      <Dropdown
        options={SAMPLE_OPTIONS}
      />
      <Dropdown
        label="Dropdown label"
        options={SAMPLE_OPTIONS}
      />
      <Button>Sample Button</Button>
      <Input label="test input" type="url" />
      <Dropdown
        options={SAMPLE_OPTIONS}
      />
      <Input label="test input" type="url" />
      <div>
        <Input placeholder="test input" type="url" />
      </div>
      <Checkbox checked />
      <Checkbox label="test" />
      <Input placeholder="test input" type="url" />
    </PageLayout>
  );
}

InputFormComponents.propTypes = {
  match: PT.shape({
    url: PT.string.isRequired,
  }).isRequired,
};
