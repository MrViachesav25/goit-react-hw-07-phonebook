import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64cf490cffcda80aff51b7c5.mockapi.io/';

export const fetchContactThunk = createAsyncThunk(
    'contacts/fetchContactThunk', 
    async (_, thunkApi) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        }
        catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const addContactThunk = createAsyncThunk(
    'contacts/addContactThunk',
    async ({name, phone}, thunkApi) => {
        try {
            const response = await axios.post('/contacts', { name, phone });
            return response.data;
        }
        catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const deleteContactThunk = createAsyncThunk(
    'contacts/deleteContactThunk',
    async (id, thunkApi) => {
        try { 
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        }
        catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);