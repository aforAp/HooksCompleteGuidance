import {useState, useEffect} from 'react';

export default function ProgessBar({ remainingTimes }) {
     const [remainingTime, setRemainingTime] = useState(remainingTimes);
    
      useEffect(() => {
        const interval = setInterval(() => {
          console.log('TIMER TICK');
          setRemainingTime((prevTime) => prevTime - 10);
        }, 10);
    
        return () => {
          clearInterval(interval);
        };
      }, []);
  return (
    <progress value={remainingTime} max={3000} />
  );
}