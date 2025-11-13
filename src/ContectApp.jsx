import React, { useReducer, useState } from 'react';
import { initialState, reducer } from './reducer';
import ContectForm from './ContectForm';
import { ContactList } from './ContactList';

export const ContectApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editContect, setEditContact] = useState(null);
  const [searchingTerm ,setSearchingTerm]=useState('')
  const fillterSearch=state.filter(
    (search)=>search.name.toLowerCase().includes(searchingTerm.toLowerCase()))

  return (
    <div>
      <h1>Contact App</h1>
      <input type="text" 
      placeholder='Searching Contect..'
      value={searchingTerm}
      onChange={(e)=>setSearchingTerm(e.target.value)} />
      <ContectForm
        dispatch={dispatch}
        editContect={editContect}
        setEditContact={setEditContact}
      />
      <ContactList
        contacts={fillterSearch}
        dispatch={dispatch}
        setEditContact={setEditContact}
      />
    </div>
  );
};
