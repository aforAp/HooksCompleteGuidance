import React, { useState } from 'react'
import clsx from 'clsx';
const BorderRadius = () => {
    const BorderVariety = {
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
    };
    const [radius, setRadius] = useState(BorderVariety);
     const borderRadius = clsx("w-[200px] h-[200px] inline-block top-[50px] border-2 border-black", radius.topLeft > 10 ? "bg-red-500": "bg-blue-200");

    function FunctionalityChange(event) {
        const {name, value} = event.target;
       setRadius({...radius, [name]: Number(value)});
    }
    
    
  return (
   
    <div>
        <input  className='border-2 border-amber-400' value={radius.topLeft} name="topLeft" onChange={(event) => FunctionalityChange(event)} />
        <input  className='border-2 border-amber-400' value={radius.topRight} name="topRight" onChange={(event) => FunctionalityChange(event)} />
        <input  className='border-2 border-amber-400' value={radius.bottomLeft} name="bottomLeft" onChange={(event) => FunctionalityChange(event)} />
        <input  className='border-2 border-amber-400' value={radius.bottomRight} name="bottomRight" onChange={(event) => FunctionalityChange(event)} />
        <button>Click Me</button>
         <span className={borderRadius} style={{
           borderTopLeftRadius: `${radius.topLeft}px`,
    borderTopRightRadius: `${radius.topRight}px`,
    borderBottomLeftRadius: `${radius.bottomLeft}px`,
    borderBottomRightRadius: `${radius.bottomRight}px`,
         }}> 
            {borderRadius} 
       </span>
    </div>
  )
}

export default BorderRadius
