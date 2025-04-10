
import InitPhoneBook from "../components/App/PhoneBook.json";

import { configureStore, createAction } from '@reduxjs/toolkit';

const initialState = {
  contacts: { items : InitPhoneBook },
  filters:  { name: ""  },
  };

const rootReducer = (state = initialState, action) => {
  console.log("action.payload", action);
  switch (action.type) {
    case 'contacts/addContact':
      return {
        ...state,
        contacts: {
          items: [...state.contacts.items, action.payload],
        },
      };
    case 'contacts/deleteContact':
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter((contact) => contact.id !== action.payload.id),
        },
      };

    case 'filters/changeFilters':
      return {
        ...state,
        filters: {
          name: action.payload,
        },
      };

    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReducer,
});

export const addContact = createAction('contacts/addContact');

export const changeFilters = createAction('filters/changeFilters');
export const deleteContact = createAction('contacts/deleteContact');    