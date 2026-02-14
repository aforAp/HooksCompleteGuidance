import {useRef, useState} from 'react'

const InputValues = () => {
    const names = useRef();
    const [Stored, setStored] = useState();
    function DisplayTheName() {
      setStored(names.current.value);
      names.current.value = '';
    }
  return (
    <div>
        <h1>{Stored}</h1>
      <input ref={names} type="text"/>
      <button onClick={DisplayTheName}>ClickMe</button>
    </div>
  )
}

export default InputValues;
