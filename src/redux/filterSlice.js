import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
    filter: '',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        addFilterSlice(state, {payload}) {
            state.filter = payload;
        },
    },
});

export const { addFilterSlice } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;