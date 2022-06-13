import React from "react";

function MessageCard({ contact }) {
  return (
    <div
      style={{ cursor: "pointer", marginBottom: 1, marginTop: 0 }}
      className="box media"
    >
      <div className="media-left">Sent To:</div>
      {/* <figure className="image is-64x64 media-left">
        <img className="is-rounded" src={contact.photo} alt={contact.name} />
      </figure> */}
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{contact.name}</strong> <small>on 13, June 2022</small>
            <br />
            <strong>OTP</strong>: 21230
          </p>
        </div>
      </div>
    </div>
  );
}

export default MessageCard;
