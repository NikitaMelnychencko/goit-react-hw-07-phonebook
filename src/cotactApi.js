import axios from 'axios';

axios.defaults.baseURL = 'https://61ea87adc9d96b0017700bc7.mockapi.io';

export async function fetchContactsById(id) {
  const contact = await axios.get(`/contacts/${id}`);
  return contact.data;
}
