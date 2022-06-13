import React, { useEffect, useState } from "react";
import MessageCard from "./MessageCard";
import contactsDATA from "../assets/contacts.json";
import twilio from "../api/twilio";

function Messages() {
  const contacts = contactsDATA.contacts;
  const contact = contacts[0];
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    twilio("/get-messages")
      .then((res) => {
        console.log(res.data);
        setMessages(res.data.messages);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {messages.map((message, indx) => (
        <MessageCard message={message} contact={contact} key={indx} />
      ))}
    </>
  );
}

export default Messages;
