/**
 * Demo/test of the Modal component.
 */

import { useState } from 'react';

import {
  Button,
  Input,
  Link,
  Modal,
  PageLayout,
} from '@dr.pogodin/react-utils';

const ModalExample: React.FunctionComponent = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  return (
    <PageLayout>
      <Link to="..">&lArr; Content</Link>
      <h1>Modal</h1>
      <Button onClick={() => setShow(true)}>
        Show Modal
      </Button>
      <Input
        label="Sample Managed Input"
        onChange={(e) => setText2(e.target.value)}
        value={text2}
      />
      {
        show ? (
          <Modal onCancel={() => setShow(false)}>
            <div>This is a sample modal.</div>
            <Input label="Sample Non-Managed Input" />
            <Input
              label="Sample Managed Input"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
          </Modal>
        ) : null
      }
    </PageLayout>
  );
};

export default ModalExample;
