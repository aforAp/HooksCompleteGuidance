import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { INCREMENT, DECREMENT } from '../store';
//connect which was used in the class components

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);
  const dispatch = useDispatch();
//executed by the react redux to retrieve the part of the state.

const incrementHandler = () => {
    dispatch({type: INCREMENT});
};

const increaseHandler = () => {
  dispatch({type: 'increase', amount: 5});
}

const decrementHandler = () => {
   dispatch({type: DECREMENT});
}
  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}>{counter}</div>}
      <div>
         <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment By 5</button>
         <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
