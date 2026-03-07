import React from 'react'

const Modal = ({handleRemoveTask2, setShowPopup, timers}) => {
  return (

    <div className='popup'>
      <h1>Are you sure you want to remove this task?</h1>
      <div className='m-4 flex justify-between'>

      <button className='confirmButton' onClick={handleRemoveTask2}>Yes</button>
      <button className='cancelButton' onClick={() => setShowPopup(false)}>No</button>
      </div>
      <div>
        {timers > 0 && <p>Popup will close in {timers} seconds.</p>}
      </div>
    </div>
  )
}

export default Modal
