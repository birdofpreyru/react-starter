/**
 * Demo/test of the Modal component.
 */

import {
  Button,
  Input,
  Link,
  Modal,
  PageLayout,
  useGlobalState,
} from '@dr.pogodin/react-utils';

const ModalExample: React.FunctionComponent = () => {
  const [show, setShow] = useGlobalState('a', false);
  const [text, setText] = useGlobalState('b', '');
  const [text2, setText2] = useGlobalState('c', '');
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
