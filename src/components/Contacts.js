import React from "react";
import ContactCard from "./ContactCard";
import contactsData from "../assets/contacts.json";
import { Link, useNavigate } from "react-router-dom";

const contacts = contactsData.contacts;

contacts.forEach((contact) => {
  contact.number = process.env.REACT_APP_TEST_PHONE_NO;
});

function Contacts() {
  const navigate = useNavigate();

  return (
    <>
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
