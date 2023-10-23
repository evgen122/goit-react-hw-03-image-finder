import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// export const ModalWindow = ({ isStateModal }) => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// =============================================================
// import * as basicLightbox from 'basiclightbox';

// export const ModalWindow = ({ isStateModal, isClose, src, alt }) => {
//   const instance = basicLightbox.create(
//     `
//     <img src=${src} width="800" onClice=${isClose}/>
// `,
//     { closable: true }
//   );
//   if (isStateModal) {
//     return instance.show();
//   }
//   if (isStateModal === false) {
//     return instance.close();
//   }
//   instance.closable();
// };
// ===========================================

import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    backgroundColor: '#4e4a48',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const ModalWindow = ({ isStateModal, isClose, src, alt }) => {
  console.log(isStateModal);

  return (
    <Modal
      isOpen={isStateModal}
      onRequestClose={isClose}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
      contentLabel="onRequestClose"
    >
      <img src={src} alt={alt} width="800" />

      <button onClick={isClose}>Close</button>
    </Modal>
  );
};
