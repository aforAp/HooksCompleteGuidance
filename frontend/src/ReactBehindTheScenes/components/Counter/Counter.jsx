import { useState, memo, useCallback, useMemo, useEffect } from 'react';

import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import CounterOutput from './CounterOutput.jsx';
import CounterHistory from './CounterHistory.jsx';
import { log } from '../../log.js';
import { use } from 'react';

const isPrime = (number) => {
  console.log(number);

    console.log(
      'Calculating if is prime number',
      2,
      'other'
  );
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const Counter = memo(function Counter({ initialCount }) {
  log('<Counter /> rendered', 1);
  const initialCountIsPrime = useMemo(() => isPrime(initialCount), [initialCount]);
  // useEffect(() => {
  //   setCounterChanges([{value: initialCount, id: Math.random() * 1000}]);
  // }, [initialCount]);

 // const [counter, setCounter] = useState(initialCount);
const [counterChanges, setCounterChanges] = useState([{value: initialCount, id: Math.random() * 1000}]);
const currentCounter = counterChanges.reduce((acc, changes) => acc + changes.value, 0);
  const handleDecrement = useCallback(() => {
    setCounterChanges((prevCounter) => [{value: -1, id: Math.random() * 1000}, ...prevCounter]);
  }, []);

  const handleIncrement = useCallback(() => {
    setCounterChanges((prevCounter) => [{value: 1, id: Math.random() * 1000}, ...prevCounter]);
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{' '}
        <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={currentCounter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
      <CounterHistory history={counterChanges} />
    </section>
  );
});


export default Counter;