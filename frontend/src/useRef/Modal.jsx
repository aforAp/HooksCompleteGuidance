import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
const Modal = forwardRef(function Modal(props, ref) {
  const dialog = useRef(null);

 

  function closeModal() {
    dialog.current.close();
  }

  useImperativeHandle(ref, () => ({
    open() {
        dialog.current.showModal()
    },
    close: closeModal,
  }));
  return createPortal(
    <dialog
      ref={dialog}
      className="w-1/2 border border-indigo-50 rounded-xl backdrop-blur-sm"
    >
      <h1 className="after:content-['*'] after:ml-3">Oththa Baadu</h1>
      
          <button onClick={closeModal}  className="buttonStyle">Close</button>
     
    </dialog>,
      document.getElementById("modal-root"),
  );
});

export default Modal;
