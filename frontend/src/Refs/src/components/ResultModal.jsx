import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom';
const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref,
) {
  //dialog has a built in feature to overlay the modal
  //dialog method when we use that it will close the modal.with the help of close.
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  //not used often
  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {/* open attribute makes the modal was open by default in the dialog */}
     {userLost && <h2>You lost</h2>}
     {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You Stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;
