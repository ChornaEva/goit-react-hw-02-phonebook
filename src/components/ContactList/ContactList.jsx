import React from "react";
import PropTypes from "prop-types";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button onClick={() => deleteContact(contact.id)}> Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
