import axios from 'axios';
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
} from './phonebook-actions';
axios.defaults.baseURL = 'https://61ea87adc9d96b0017700bc7.mockapi.io';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

const addContacts = contactData => dispatch => {
  dispatch(addContactsRequest());
  axios
    .post('/contacts', contactData)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch(error => dispatch(addContactsError(error)));
};

const dellContacts = id => dispatch => {
  dispatch(dellContactsRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(dellContactsSuccess(id)))
    .catch(error => dispatch(dellContactsError(error)));
};

const updateContacts =
  ({ contactData, contactId }) =>
  dispatch => {
    dispatch(updateContactsRequest());
    axios
      .put(`/contacts/${contactId}`, contactData)
      .then(({ data }) => dispatch(updateContactsSuccess(data)))
      .catch(error => dispatch(updateContactsError(error)));
  };
//=====dell====//
export default {
  fetchContacts,
  addContacts,
  dellContacts,
  updateContacts,
};
