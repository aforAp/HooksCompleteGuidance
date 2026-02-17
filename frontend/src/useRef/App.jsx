import {useRef} from 'react'
import Modal from './Modal.jsx';
const App = () => {
    const refs = useRef(null);

    function handleShow() {
        refs.current.open();
    }

  return (
    <div>
      <Modal ref={refs}/>
      <button onClick={handleShow} className='button'>ShowModal</button>
      
    </div>
  )
}

export default App;
