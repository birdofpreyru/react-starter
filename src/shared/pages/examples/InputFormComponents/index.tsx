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
  TextArea,
  useGlobalState,
  type ForceT,
} from '@dr.pogodin/react-utils';

import './style.scss';

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

const InputFormComponents: React.FunctionComponent = () => {
  const [
    controlledDropdownValue,
    setControlledDropdownValue,
  ] = useState('option1');
  const lastInputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useGlobalState<ForceT, string>('test-input-form-components-path', '');

  const [taValue, setTaValue] = useState('');

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
      <TextArea
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTaValue(e.target.value)}
        placeholder="Example TextArea"
        value={taValue}
      />
      <h3>Dropdown inside narrow flex-container</h3>
      <div styleName="testDiv">
        <Dropdown
          label="Dropdown label"
          options={SAMPLE_OPTIONS}
        />
      </div>
      <h3>Input Connected to the Global State</h3>
      <Input onChange={(e) => setValue(e.target.value)} value={value} />
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
};

export default InputFormComponents;
