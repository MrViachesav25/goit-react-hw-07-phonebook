
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filterSlice';

// В конфігу ми вказуємо які поля ми хочемо бачити, а які не хочемо в локальному сховищі 
// const contactsPersistConfig = {
//     key: 'contacts',
//     storage,
//     whitelist: ['contacts'],
//   };


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
    // Події, щоб синхронізувати локальне сховище зі стейтом, і навпаки, наш стор має розрізняти ці події
    // middleware: getDefaultMiddleware => 
    // getDefaultMiddleware({
    //   serializableCheck: {
    //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //   },
    // }),
});

// Синхронізація локального сховища зі стором 

// export const persistor = persistStore(store);