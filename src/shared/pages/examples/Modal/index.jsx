/**
 * Demo/test of the Modal component.
 */

import React, { useState } from 'react';
import {
  Button,
  Input,
  Link,
  Modal,
  PageLayout,
  PT,
  url,
} from '@dr.pogodin/react-utils';

export default function ModalExample({ match }) {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  return (
    <PageLayout>
      <Link to={url.parent(match.url)}>&lArr; Content</Link>
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
}

ModalExample.propTypes = {
  match: PT.shape({
    url: PT.string.isRequired,
  }).isRequired,
};
