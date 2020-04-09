/**
 * Demo/test of the Modal component.
 */

import React, { useState } from 'react';
import {
  Button,
  Link,
  Modal,
  PageLayout,
  PT,
  url,
} from '@dr.pogodin/react-utils';

export default function ModalExample({ match }) {
  const [show, setShow] = useState(false);
  return (
    <PageLayout>
      <Link to={url.parent(match.url)}>&lArr; Content</Link>
      <h1>Modal</h1>
      <Button onClick={() => setShow(true)}>
        Show Modal
      </Button>
      {
        show ? (
          <Modal onCancel={() => setShow(false)}>
            This is a sample modal.
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
