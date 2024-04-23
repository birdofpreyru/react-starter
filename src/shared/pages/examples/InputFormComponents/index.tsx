import { useState } from 'react';

import {
  api,
  config,
  Button,
  Checkbox,
  CustomDropdown,
  Dropdown,
  Input,
  Link,
  PageLayout,
  Switch,
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
  const [checked, setChecked] = useState(false);

  const [
    controlledDropdownValue,
    setControlledDropdownValue,
    // TODO: This <string | number> type is a temporary workaround for the issue
    // https://github.com/birdofpreyru/react-utils/issues/342
  ] = useState<string | number>('option1');

  const [value, setValue] = useGlobalState<ForceT, string>(
    'test-input-form-components-path',
    '',
  );

  const [taValue, setTaValue] = useState('');

  return (
    <PageLayout>
      <Link to="..">&lArr; Content</Link>
      <h1>Input Form Components</h1>

      <h2>Button</h2>
      <Button>Sample Button</Button>
      <Button disabled>Disabled Button</Button>

      <h2>Checkbox</h2>
      <Checkbox
        checked={checked}
        label="Sample <Checkbox>"
        onChange={(e) => setChecked(e.target.checked)}
      />

      <h2>Custom Dropdown</h2>
      <CustomDropdown
        label="TEST"
        onChange={setControlledDropdownValue}
        options={SAMPLE_OPTIONS}
        value={controlledDropdownValue}
      />

      <h2>Input</h2>
      <Input
        label="Sample unmanaged <Input>"
        placeholder="Placeholder"
        type="url"
      />
      <Input
        label="Managed via the global state"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Try me"
        value={value}
      />

      <h2>Native Dropdown</h2>
      <Dropdown
        label="Native <Dropdown>"
        onChange={(e) => setControlledDropdownValue(e.target.value)}
        options={SAMPLE_OPTIONS}
        value={controlledDropdownValue}
      />
      <div styleName="testDiv">
        <Dropdown
          label="Dropdown inside narrow flex-container"
          onChange={(e) => setControlledDropdownValue(e.target.value)}
          options={SAMPLE_OPTIONS}
          value={controlledDropdownValue}
        />
      </div>

      <h2>Text Area</h2>
      <TextArea
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTaValue(e.target.value)}
        placeholder="Example TextArea"
        value={taValue}
      />
      <TextArea disabled value="Disabled text area" />

      <h2>Switch</h2>
      <Switch
        label="<Switch> test"
        onChange={setControlledDropdownValue}
        options={SAMPLE_OPTIONS}
        value={controlledDropdownValue}
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
};

export default InputFormComponents;
