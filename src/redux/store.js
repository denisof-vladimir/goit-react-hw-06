import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filterSliceReducer from "./filtersSlice";
import contactSliceReducer from "./contactsSlice";
// import InitPhoneBook from "../components/App/PhoneBook.json";

const persistedContactReducer = persistReducer(
  {
    key: "contacts",
    storage,
  },
    contactSliceReducer
  );

const persistedFilterReducer = persistReducer(
    {
      key: "filters",
      storage,
    },
   filterSliceReducer
  );

  export const store = configureStore({
    reducer: {
      contacts: persistedContactReducer,
      filters: persistedFilterReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  export const persistor = persistStore(store);