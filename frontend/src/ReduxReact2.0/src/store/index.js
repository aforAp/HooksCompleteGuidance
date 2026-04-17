import { createStore } from 'redux';

const initialState = {
  counter: 0,
  showCounter: true
};

export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';

const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    };
  }

  if (action.type === DECREMENT) {
    return {
      counter: state.counter - 1,
       showCounter: state.showCounter
    };
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
       showCounter: state.showCounter
      //amount , increase whatever we want we can use for the actions.
    };
  }

  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter
     
    }
  }

  return state;
};

const store = createStore(counterReducer);

export default store;