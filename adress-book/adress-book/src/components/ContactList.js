import React from "react";
import "./ContactList.css";

const ContactList = ({ contacts, setSearchValue, serachValue }) => {
  const getSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.fullname.includes(serachValue) ||
      contact.phoneNumber.includes(serachValue)
  );
  console.log(serachValue);
  return (
    <div className="contact-list">
      <h2>Contacts</h2>
      <input
        placeholder="Search"
        className="search-input"
        value={serachValue}
        onChange={getSearchValue}
      ></input>

      {filteredContacts.map((item, index) => (
        <ol key={index} >
          <li>
            {" "}
            <span>{item.fullname}</span> <span>{item.phoneNumber}</span>
          </li>
        </ol>
      ))}
    </div>
  );
};

export default ContactList;
