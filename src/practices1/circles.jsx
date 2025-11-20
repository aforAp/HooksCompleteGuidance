import React, { useState } from 'react';

const Circles = () => {
    const [input, setInput] = useState(0);

    const CircleArray = Array.from({ length: Number(input) }, (_, i) => ({
    id: i,
    width: 20,
    height: 20,
    radius: 50
}));

function BackGroundColor() {
    let colors;
    for (let i = 0; i < 6; i++) {
       const randomIndex1 = Math.floor(Math.random() * 225 + 1);
       const randomIndex2 = Math.floor(Math.random() * 225 + 1);
       const randomIndex3 = Math.floor(Math.random() * 225 + 1);
       colors = `rgba(${randomIndex1}, ${randomIndex2}, ${randomIndex3})`;
    }
return colors;
}
  return (
    <div>
      <input value={input} onChange={(event) => setInput(event.target.value)} />
      {CircleArray.map((data, id) => (
        <div style={
            {
                position: "relative"
            }
        }>

        <span key={id} style={{
            width: `${data.width}px`,
            height:`${data.height}px`,
           borderRadius: `${data.radius}%`,
            position: 'absolute',
            top: `${data.id * (Math.random()* input/2)}px`,
            left: `${data.id * (Math.random()* input/2)}px`,
           backgroundColor: BackGroundColor(),
            borderColor: 'black',
        }}>

        </span>
        </div>
      ))}
    </div>
  )
}

export default Circles
