import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import twilio from "../api/twilio";

const notify = (message) => toast.success(message);
const notifyError = (message) => toast.error(message);

function ContactInfo() {
  const location = useLocation();
  const info = location.state.contact;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const removeContact = () => {
    setLoading(true);
    twilio
      .delete("/contact", {
        data: { phone: info.phone },
      })
      .then((res) => {
        console.log("deleted");
        setLoading(false);
        notify("Deleted Succesfully");
        setTimeout(() => {
          navigate(-1);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        notifyError("Cannot Deleted");
      });
  };

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
        <h5 className="title is-5">
          {info.first_name} {info.last_name}
        </h5>
        <p className="subtitle is-6">{info.email}</p>
        <p className="subtitle is-6">{info.phone}</p>
        <Link to={`/message/${info._id}`} state={{ info: info }}>
          <button
            style={{ marginBottom: 4 }}
            className="button is-link is-fullwidth"
          >
            Send OTP
          </button>
        </Link>
        <button
          style={{ marginBottom: 4 }}
          disabled={loading}
          onClick={() => removeContact()}
          className={`button is-danger is-fullwidth ${loading && "is-loading"}`}
        >
          Delete Contact
        </button>
        <button
          onClick={() => navigate(-1)}
          className="button is-link is-light is-fullwidth"
        >
          Back
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}

export default ContactInfo;
