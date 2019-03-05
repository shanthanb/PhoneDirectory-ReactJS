import React from "react";
import "./Contacts.css";

const contacts = props => {
  const contactList = props.list.map((contact, id) => {
    return (
      <tr key={id}>
        <td>{contact.name}</td>
        <td>{contact.phone}</td>
        <td>
          <button onClick={() => props.onDelete(contact.id)} className="Contacts__delete">DELETE</button>
        </td>
      </tr>
    );
  });
  return (
    <table className="Contacts__table">
      <tbody>
        <tr>
          <th>NAME</th>
          <th>PHONE</th>
        </tr>
        {contactList}
      </tbody>
    </table>
  );
};

export default contacts;
