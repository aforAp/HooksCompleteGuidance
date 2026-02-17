import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
const Modal = forwardRef(function Modal({ children, buttonCapture}, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
        //inbuilt method provided my dialog
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog" className="mt-4 text-right">
        {/* the diallog will close the modal  */}
        <button className="buttonStyle">{buttonCapture}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
});

export default Modal;
