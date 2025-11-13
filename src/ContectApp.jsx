import React, { useReducer, useState } from 'react';
import { initialState, reducer } from './reducer';
import ContectForm from './ContectForm';
import { ContactList } from './ContactList';

export const ContectApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editContect, setEditContact] = useState(null);

  return (
    <div>
      <h1>Contact App</h1>
      <ContectForm
        dispatch={dispatch}
        editContect={editContect}
        setEditContact={setEditContact}
      />
      <ContactList
        contacts={state}
        dispatch={dispatch}
        setEditContact={setEditContact}
      />
    </div>
  );
};
