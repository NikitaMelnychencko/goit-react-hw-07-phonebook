import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  dellContactsRequest,
  dellContactsSuccess,
  dellContactsError,
  updateContactsRequest,
  updateContactsSuccess,
  updateContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addFilter,
} from './phonebook-actions';

const itemReducer = createReducer([], {
  [fetchContactsSuccess]: (state, { payload }) => [...payload],
  [addContactsSuccess]: (state, action) => [...state, action.payload],
  [updateContactsSuccess]: (state, { payload }) => {
    const updatedContacts = [];
    state.forEach(el => {
      el.id !== payload.id
        ? updatedContacts.push(el)
        : updatedContacts.push(payload);
    });
    return updatedContacts;
  },
  [dellContactsSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer('', {
  [addFilter]: (state, action) => action.payload,
});
const error = createReducer(null, {});

const loading = createReducer(false, {
  //====fetchContactsAction====//
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  //====addContacts====//
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  //=====dellContacts====//
  [dellContactsRequest]: () => true,
  [dellContactsSuccess]: () => false,
  [dellContactsError]: () => false,
  //=====updateContacts====//
  [updateContactsRequest]: () => true,
  [updateContactsSuccess]: () => false,
  [updateContactsError]: () => false,
});

export default combineReducers({
  items: itemReducer,
  filter: filterReducer,
  loading: loading,
  error,
});
