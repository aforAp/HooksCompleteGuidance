import React, {useState} from 'react'

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

const Practices = () => {
    const [shapes, setShapes] = useState(initialShapes);

    function CircleDown() {
        const updatedShapes = shapes.map(shape => {
            if(shape.type === 'circle') {
                return { ...shape, y: shape.y + 50 };
            }
return shape;
//super important to return the shape if condition not met
        });
        setShapes(updatedShapes);
    }

    function SquareDown() {
        const updatedShapes = shapes.map(shape => {
            if(shape.type === 'square'){
                return {
                    ...shape,
                    x:shape.x + 50,
                    y: shape.y + 50,

                }
            }
            return shape;
        })
        setShapes(updatedShapes);
    }

  return (
    <div>
      <button onClick={CircleDown}>Circle Down</button>
      <button onClick={SquareDown}>Square Down</button>
      {shapes.map(shape => (
        <div key={shape.id} style={{
          position: 'absolute',
          left: shape.x,
            top: shape.y,
        }}>
          {shape.type === 'circle' ? (
            <div style={{width: "50px", height: "50px", borderRadius: "25px", backgroundColor: "blue"}}></div>
          ) : (
            <div style={{width: "50px", height: "50px", backgroundColor: "red"}}></div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Practices;
