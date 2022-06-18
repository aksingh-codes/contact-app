import React, { useEffect, useState } from "react";
import MessageCard from "./MessageCard";
import contactsDATA from "../assets/contacts.json";
import twilio from "../api/twilio";
import { TailSpin } from "react-loader-spinner";

function Messages() {
  const contacts = contactsDATA.contacts;
  const contact = contacts[0];
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    twilio("/get-messages")
      .then((res) => {
        console.log(res.data);
        setMessages(res.data.messages);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "60vh",
            justifyContent: "center",
          }}
        >
          <TailSpin color="grey" ariaLabel="loading-indicator" />
        </div>
      ) : (
        messages.map((message, indx) => (
          <MessageCard message={message} contact={contact} key={indx} />
        ))
      )}
    </>
  );
}

export default Messages;
