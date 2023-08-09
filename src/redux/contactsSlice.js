import { addContactThunk, deleteContactThunk, fetchContactThunk } from './thunk';

const { createSlice } = require("@reduxjs/toolkit")

const allContacts = {
    items: [],
    isLoading: false,
    error: null
}

const getPending = (state) => {
    state.isLoading = true;
    state.error = null;
};

const getFulfilled = (state, action) => {
    state.isLoading = false;
    state.items = action.payload;
};

const getRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: allContacts,
    extraReducers: (builder) => builder
    .addCase(fetchContactThunk.pending, getPending)
    .addCase(fetchContactThunk.fulfilled, getFulfilled)
    .addCase(fetchContactThunk.rejected, getRejected)
    .addCase(addContactThunk.pending, getPending)
    .addCase(addContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.unshift(action.payload);
    })
    .addCase(addContactThunk.rejected, getRejected)
    .addCase(deleteContactThunk.pending, getPending)
    .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex(item => item.id === action.payload.id);
        state.items.splice(index, 1)
    })
    .addCase(deleteContactThunk.rejected, getRejected)
});

export const { addContactsSlice, deleteContactsSlice } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;