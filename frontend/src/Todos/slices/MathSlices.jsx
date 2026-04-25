import {createSlice} from '@reduxjs/toolkit';

const MathSlice = createSlice({
    name: 'math',
    initialState: {
        word: '',
        length: 0,
    },

    reducers: {
        wordLength(state, action) {
            state.length = action.payload.length;
        },
        wordReverse(state, action) {
            state.word = action.payload.split('').reverse().join('');
        }
    }

}
);

export const { wordLength, wordReverse } = MathSlice.actions;
export default MathSlice.reducer;