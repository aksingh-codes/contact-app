import React from "react";
import ContactCard from "./ContactCard";
import contactsData from "../assets/contacts.json";
import { Link, useNavigate } from "react-router-dom";

const contacts = contactsData.contacts;

contacts.forEach((contact) => {
  contact.number = 12839021309;
});

console.log(contacts);

function Contacts() {
  const navigate = useNavigate();

  return (
    <>
      {console.log(contacts)}
      {contacts.map((contact) => (
        <Link
          to={`info/${contact.id}`}
          state={{ contact: contact }}
          key={contact.id}
        >
          <ContactCard contact={contact} onClick={() => navigate()} />
        </Link>
      ))}
    </>
  );
}

export default Contacts;
