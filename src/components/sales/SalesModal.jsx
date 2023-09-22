import React, { useState } from "react";
import "./Modal.css";

function Modal() {
  const [show, setShow] = useState(false);
  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn_Modal">
        Open
      </button>
  
<div className="modal">
  <div className="overlay"></div>
  <div className="modal-content">
    <h2>Hello Modal</h2>
    <p>Somethinggg asd ad as ads as asdasddsadasdsa saddasdsadas adsdass</p>
    <button className="close-modal" onClick={toggleModal}>
      Close
    </button>
  </div>
</div>;
</>
  );
}


export default Modal;

// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);
// return (
//   <>
//     <Button variant="primary" onClick={handleShow}>
//       Launch static backdrop modal
//     </Button>

//     <Modal
//       show={show}
//       onHide={handleClose}
//       backdrop="static"
//       keyboard={false}
//     >
//       <Modal.Header closeButton>
//         <Modal.Title>Modal title</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         I will not close if you click outside me. Don not even try to press
//         escape key.
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Close
//         </Button>
//         <Button variant="primary">Understood</Button>
//       </Modal.Footer>
//     </Modal>
//   </>
// );
