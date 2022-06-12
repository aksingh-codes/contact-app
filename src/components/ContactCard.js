import React from "react";

function ContactCard({ contact }) {
  return (
    <div
      style={{ cursor: "pointer", marginBottom: 1, marginTop: 0 }}
      className="box media"
    >
      <figure className="image is-64x64 media-left">
        <img className="is-rounded" src={contact.photo} alt={contact.name} />
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{contact.name}</strong>
            <br />
            <small>@{contact.company}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
