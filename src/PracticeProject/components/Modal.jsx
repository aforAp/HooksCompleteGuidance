import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button.jsx";
const Modal = forwardRef(function Modal({children, buttonCaption}, ref){
   const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            //useImperative comes from the NewProject elements there was a open() modal at was accessgin from here.
            open() {
                dialog.current.showModal();
            },
        };
    });
    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
           {children}
           <form method="dialog" className="mt-4 text-right">
        {/* form associtated with the dialog ref if we click the button close the modal will automatically closes. */}
            <Button>{buttonCaption}</Button>
           </form>
        </dialog>,
        document.getElementById('root')
    )
    ///createPortal which helps us to render the element in specific html element we have mentioned modal-root in that tag will be rendered....

}) 

export default Modal;
