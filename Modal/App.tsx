import { useState } from 'react';
import Modal from './Modal';

function Demo() {
  const [open, setOpen] = useState(false);

  return (
  <>
      <button onClick={() => setOpen(true)}>Show Modal</button>
      <Modal
        setOpen{open}
        onClose={() => setOpen(false)}
        width="medium"
        position="center"
        overlayColor="rgba(30,28,63,0.8)"
        contentBgColor="#fff"
        >
        <h2 style={{ marginTop: 0 }}>My Modal Title</h2>
        <p>You can put icons or forms here.</p>
      </Modal>
    </>
  );
}
