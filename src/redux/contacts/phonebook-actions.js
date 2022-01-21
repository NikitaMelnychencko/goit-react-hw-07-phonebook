import { createAction } from '@reduxjs/toolkit';

//=======fetchContactsAction======//
export const fetchContactsRequest = createAction('contacts/fetchItemRequest');
export const fetchContactsSuccess = createAction('contacts/fetchItemSuccess');
export const fetchContactsError = createAction('contacts/fetchItemError');

//=======addContactsAction======//
export const addContactsRequest = createAction('contacts/addItemRequest');
export const addContactsSuccess = createAction('contacts/addItemSuccess');
export const addContactsError = createAction('contacts/addItemError');

//=======dellContactsAction======//
export const dellContactsRequest = createAction('contacts/dellContactsRequest');
export const dellContactsSuccess = createAction('contacts/dellContactsSuccess');
export const dellContactsError = createAction('contacts/dellContactsError');

//=======updateContactsAction======//
export const updateContactsRequest = createAction(
  'contacts/updateContactsRequest',
);
export const updateContactsSuccess = createAction(
  'contacts/updateContactsSuccess',
);
export const updateContactsError = createAction('contacts/updateContactsError');
//=======addFilterAction======//
export const addFilter = createAction('contacts/addFilter');
