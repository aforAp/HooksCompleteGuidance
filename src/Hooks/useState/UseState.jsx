import { useState } from "react";



const UseState = () => {
    const [name, setName] = useState('Satheesh');
    const [count, setCount] = useState(0);
    const handleNameChange = () => {
        const names = ['satheesh', 'panna', 'welcome'];
        let values = Math.floor(Math.random() * 3);
        setName(names[values]);
    }

    const handleClick = () => {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        console.log(count);
    }

    const handleClick2 = () => {
        console.log(count);
    }



  return (
    <div>
      <p>{name}</p>
      <button onClick={handleNameChange}>Chnage Name</button>
      <button onClick={handleClick}>Click It</button>
      <button onClick={handleClick2}>Click It</button>
    </div>
  )
}

export default UseState
