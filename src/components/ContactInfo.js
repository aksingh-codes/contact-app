import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function ContactInfo() {
  const location = useLocation();
  const info = location.state.contact;
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          minWidth: "300px",
          border: "0.1px solid rgba(0,0,0, 0.1)",
        }}
        className="column box"
      >
        <div className="level">
          <div className="level-item">
            <figure className="image is-128x128">
              <img className="is-rounded" src={info.photo} alt={info.name} />
            </figure>
          </div>
        </div>
        <h5 className="title is-5">{info.name}</h5>
        <p className="subtitle is-6">{info.email}</p>
        <p className="subtitle is-6">{info.number}</p>
        <Link to={`/message/${info.id}`} state={{ info: info }}>
          <button
            style={{ marginBottom: 4 }}
            className="button is-link is-fullwidth"
          >
            Send OTP
          </button>
        </Link>
        <button
          onClick={() => navigate(-1)}
          className="button is-link is-light is-fullwidth"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default ContactInfo;
