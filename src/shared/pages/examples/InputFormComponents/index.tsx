import { useRef, useState } from 'react';

import {
  api,
  config,
  Button,
  Checkbox,
  Dropdown,
  Input,
  Link,
  PageLayout,
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

export default function InputFormComponents() {
  const [
    controlledDropdownValue,
    setControlledDropdownValue,
  ] = useState('option1');
  const lastInputRef = useRef<HTMLInputElement>(null);
  return (
    <PageLayout>
      <Link to="..">&lArr; Content</Link>
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
        onChange={(e) => setControlledDropdownValue(e.target.value)}
        options={SAMPLE_OPTIONS}
        value={controlledDropdownValue}
      />
      <Input label="test input" type="url" />
      <div>
        <Input
          onKeyDown={(e) => {
            if (e.key === 'Enter') lastInputRef.current?.focus();
          }}
          placeholder="test input"
          type="url"
        />
      </div>
      <Checkbox checked />
      <Checkbox label="test" />
      <Input
        placeholder="test input"
        ref={lastInputRef}
        type="url"
      />
      <h3>CSRF Test</h3>
      <Button
        onClick={async () => {
          await api.post('/__api__/example');
        }}
      >
        Fail CSRF Protection
      </Button>
      <Button
        onClick={async () => {
          await api.post('/__api__/example', {
            _csrf: config.CSRF,
          });
        }}
      >
        Pass CSRF Protection
      </Button>
    </PageLayout>
  );
}
