import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: 'slices',
    initialState: {
        id: 0,
        items: [],
    },
    reducers: {
        addTodo (state, action) {
            state.id++;
            state.items.push({id: state.id, text: action.payload});
        },

        editTodo (state, action) {
            const {id, text} = action.payload;
            const existingTodo = state.items.find(item => item.id === id);
            if (existingTodo) {
                existingTodo.text = text;
            }
        },
        removeTodo (state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    }
}
);
export const { addTodo, editTodo, removeTodo } = TodoSlice.actions;
export default TodoSlice.reducer;