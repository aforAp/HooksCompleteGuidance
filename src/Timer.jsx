import { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [delay, setDelay] = useState(100); // in ms
  const [count, setCount] = useState(0);
  const counter = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      counter.current += 1;

      // update count every 5 ticks
      if (counter.current / 5 === 0) {
        setCount(prev => prev + 1);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [delay]); // restart if delay changes

  return (
    <div>
      <h1>Timer: {count}</h1>
      <label>Delay (ms): </label>
      <input
        type="number"
        value={delay}
        onChange={e => setDelay(Number(e.target.value))}
      />
    </div>
  );
};

export default Timer;
