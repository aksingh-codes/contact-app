import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import twilio from "../api/twilio";
import { TailSpin } from "react-loader-spinner";
import NewContactModal from "./NewContactModal";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [isActiveNewContact, setIsActiveNewContact] = useState(false);

  useEffect(() => {
    setLoading(true);
    twilio
      .get("/contacts")
      .then((res) => {
        setContacts(res.data.contacts);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
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
          <TailSpin color="grey" aria-label="loading-indicator" />
        </div>
      ) : (
        <div>
          {contacts.map((contact) => (
            <Link
              to={`info/${contact._id}`}
              state={{ contact: contact }}
              key={contact._id}
            >
              <ContactCard contact={contact} />
            </Link>
          ))}
          <button
            onClick={() => setIsActiveNewContact(true)}
            className="button is-link is-large "
            style={{
              position: "fixed",
              zIndex: 2,
              bottom: 0,
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            +
          </button>

          <NewContactModal
            isActiveNewContact={isActiveNewContact}
            setIsActiveNewContact={setIsActiveNewContact}
          />
        </div>
      )}
    </>
  );
}

export default Contacts;
