import { combineReducers } from 'redux';
import { createReducer, createSlice } from '@reduxjs/toolkit';
import { addFilter } from './phonebook-actions';
import operation from './phonebobook-operation';

// const itemReducer = createReducer([], {
//   [operation.fetchContacts.fulfilled]: (state, { payload }) => [...payload],
//   [operation.addContacts.fulfilled]: (state, action) => [
//     ...state,
//     action.payload,
//   ],
//   [operation.updateContacts.fulfilled]: (state, { payload }) => {
//     const updatedContacts = [];
//     state.forEach(el => {
//       el.id !== payload.id
//         ? updatedContacts.push(el)
//         : updatedContacts.push(payload);
//     });
//     return updatedContacts;
//   },
//   [operation.dellContacts.fulfilled]: (state, { payload }) =>
//     state.filter(contact => contact.id !== payload),
// });

// const filterReducer = createReducer('', {
//   [addFilter]: (state, action) => action.payload,
// });
// const error = createReducer(null, {});

// const loading = createReducer(false, {
//   //====fetchContactsAction====//
//   [operation.fetchContacts.pending]: () => true,
//   [operation.fetchContacts.fulfilled]: () => false,
//   [operation.fetchContacts.rejected]: () => false,
//   //====addContacts====//
//   [operation.addContacts.pending]: () => true,
//   [operation.addContacts.fulfilled]: () => false,
//   [operation.addContacts.rejected]: () => false,
//   //=====updateContacts====//
//   [operation.updateContacts.pending]: () => true,
//   [operation.updateContacts.fulfilled]: () => false,
//   [operation.updateContacts.rejected]: () => false,
//   //=====dellContacts====//
//   [operation.dellContacts.pending]: () => true,
//   [operation.dellContacts.fulfilled]: () => false,
//   [operation.dellContacts.rejected]: () => false,
// });

// export default combineReducers({
//   items: itemReducer,
//   filter: filterReducer,
//   loading: loading,
//   error,
// });

const contacts = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    loading: false,
    error: null,
  },
  extraReducers: {
    //====fetchContacts====//
    [operation.fetchContacts.pending]: (state, action) => {
      state.loading = true;
    },
    [operation.fetchContacts.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.loading = false;
    },
    [operation.fetchContacts.rejected]: (state, action) => {
      state.loading = false;
    },

    //====addContacts====//
    [operation.addContacts.pending]: (state, action) => {
      state.loading = true;
    },
    [operation.addContacts.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
      state.loading = false;
    },
    [operation.addContacts.rejected]: (state, action) => {
      state.loading = false;
    },

    //=====updateContacts====//
    [operation.updateContacts.pending]: (state, action) => {
      state.loading = true;
    },
    [operation.updateContacts.fulfilled]: (state, { payload }) => {
      const updatedContacts = [];
      state.items.forEach(el => {
        el.id !== payload.id
          ? updatedContacts.push(el)
          : updatedContacts.push(payload);
      });
      state.items = updatedContacts;
      state.loading = false;
    },
    [operation.updateContacts.rejected]: (state, action) => {
      state.loading = false;
    },

    //=====dellContacts====//
    [operation.dellContacts.pending]: (state, action) => {
      state.loading = true;
    },
    [operation.dellContacts.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(contact => contact.id !== payload);
      state.loading = false;
    },
    [operation.dellContacts.rejected]: (state, action) => {
      state.loading = false;
    },

    //=====Filter====//
    [addFilter]: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export default contacts.reducer;
