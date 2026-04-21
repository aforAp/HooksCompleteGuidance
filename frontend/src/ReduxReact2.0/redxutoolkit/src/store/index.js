import {createSlice, configureStore} from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
   name: 'counter',
   initialState,
   reducer: {
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
   state.counter = state.counter + action.payload;
 },   

 toggleCounter(state) {
  state.showCounter = !state.showCounter;
 }
  
}
});


const store = configureStore({
  reducer:  counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;
