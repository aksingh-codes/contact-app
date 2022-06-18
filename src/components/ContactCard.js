import React from "react";

function ContactCard({ contact }) {
  return (
    <div
      style={{
        position: "relative",
        cursor: "pointer",
        marginBottom: 1,
        marginTop: 0,
      }}
      className="box media"
    >
      <figure className="image is-64x64 media-left">
        <img
          className="is-rounded"
          src={contact.photo}
          alt={contact.first_name}
        />
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>
              {contact.first_name} {contact.last_name}
            </strong>
            <br />
            <small>{contact.email}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
