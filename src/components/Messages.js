import React from "react";
import { Link } from "react-router-dom";
import MessageCard from "./MessageCard";
import contactsDATA from "../assets/contacts.json";

function Messages() {
  const contacts = contactsDATA.contacts;
  const contact = contacts[0];
  return (
    <>
      <Link to={"je"}>
        <MessageCard contact={contact} />
      </Link>
      <Link to={"je"}>
        <MessageCard contact={contact} />
      </Link>
      <Link to={"je"}>
        <MessageCard contact={contact} />
      </Link>
      <Link to={"je"}>
        <MessageCard contact={contact} />
      </Link>
      <Link to={"je"}>
        <MessageCard contact={contact} />
      </Link>
      <Link to={"je"}>
        <MessageCard contact={contact} />
      </Link>
      <Link to={"je"}>
        <MessageCard contact={contact} />
      </Link>
    </>
  );
}

export default Messages;
