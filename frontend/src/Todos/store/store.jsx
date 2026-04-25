import {configureStore} from '@reduxjs/toolkit';
import TodoReducer from '../slices/Dataslices.jsx';
import MathReducer from '../slices/MathSlices.jsx';
const store = configureStore({
    reducer: {
        todos: TodoReducer,
        math: MathReducer,
    },
});
export default store;
