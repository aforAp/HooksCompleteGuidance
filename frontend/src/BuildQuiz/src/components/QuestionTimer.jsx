import { use } from "react";
import {useState, useEffect} from "react";

export default function QuestionTimer({timeout, onTimeout}) {
    const [remainingTime, setRemainingTime] = useState(timeout);

   useEffect(() => {
    console.log('SETTING TIME OUT');
    const timer  =setTimeout(onTimeout, timeout);

    return () => {
        console.log('CLEARING TIMEOUT');
        clearTimeout(timer);
    };
    
   }, [onTimeout, timeout]);    
   //here why useEffect when the component re render the setTimeout will re render again and again.

    useEffect(() => {
        console.log('SETTING INTERVAL');
      const interval=  setInterval(() => {
        setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
    }, 100);

    return () => {
        console.log('CLEARING INTERVAL');
        clearInterval(interval);        
    };
    }, []);

    
    //here we are not using the useEffect bcoz we are not updating anything in the component.
    return <progress id="question-time" value={remainingTime} max={timeout} />;
}