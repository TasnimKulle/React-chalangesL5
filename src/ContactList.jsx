import React from 'react';
import { ContactItem } from './ContactItem';

export const ContactList = ({ contacts, dispatch, setEditContact }) => {
  return (
    <div>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              dispatch={dispatch}
              setEditContact={setEditContact}
            />
          ))}
        </ul>
      ) : (
        <p>No contact available</p>
      )}
    </div>
  );
};
