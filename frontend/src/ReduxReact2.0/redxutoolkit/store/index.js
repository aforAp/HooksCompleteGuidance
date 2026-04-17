import { createStore } from 'redux';
import {createSlice} from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

createSlice({
   name: 'counter',
   initialState,
   reducers: {
    increment(state)
 {
   //dont need to write the action in the state
   //allows to mutate the state.
   state.counter++;
   //still we dont mutate the exist when we use redux toolkit.
 },
 decrement(state) {
  state.counter--;
 },
 increase(state, action) {
   state.counter = state.counter + action.amount;
 },   

 toggleCounter(state) {
  state.showCounter = !state.showCounter;
 }
  
}
});



const store = createStore(counterReducer);

export default store;
