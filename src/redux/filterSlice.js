import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
    filter: '',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        addFilter(state, action) {
            return (state = action.payload);
        },
    },
});

export const { addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;