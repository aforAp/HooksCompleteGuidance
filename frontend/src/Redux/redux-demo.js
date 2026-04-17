import * as redux from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {

    if(action.type === 'increment') {
   return {
    counter : state.counter + 1
   };
}

   if(action.type === 'decrement') {
    return {
        counter : state.counter - 1
       };
   }
     return state;
};

const store =redux.createStore(counterReducer);
const counterSubscriber = () => {
    const latestState = store.getState();
    //the getState method gives us the latest state snapshot of the store whihc is aviable in the store
    //subscirte listen the state changes
    console.log(latestState);
};

store.subscribe(counterSubscriber);
//subscribe method just tell them there was a counterSubsciber was there.
store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});
