import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import generateOTP from "../utils/generateOTP";
import twilio from "../api/twilio";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MessageUI() {
  const [OTP, setOTP] = useState("");
  const message = `Hi. Your OTP is: `;
  const completeMessage = message + OTP;
  const location = useLocation();
  const info = location.state.info;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const newOTP = generateOTP();
    setOTP(newOTP);
  }, []);

  const sendMessage = () => {
    setLoading(true);

    twilio
      .post("/send-message", {
        message: completeMessage,
        to: info.phone,
      })
      .then((res) => {
        notify(res.data.message);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        notifyError("Something went wrong");
        setLoading(false);
      });
  };

  const notify = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  return (
    <>
      <div className="column">
        <div style={{ display: "inline-flex", alignItems: "center" }}>
          <strong style={{ marginRight: 8 }}>To:</strong>
          <figure
            style={{ marginRight: 8 }}
            className="image is-24x24 media-left"
          >
            <img
              className="is-rounded"
              src={info.photo}
              alt={info.first_name}
            />
          </figure>
          {info.first_name} {info.last_name}
          <small>{", " + info.phone}</small>
        </div>
        <div className="block"></div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <div
              style={{
                minHeight: "150px",
                padding: 12,
                border: "0.1px solid rgba(0,0,0, 0.1)",
                borderRadius: "6px",
              }}
            >
              {completeMessage}
            </div>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button
              onClick={() => {
                sendMessage();
              }}
              disabled={loading}
              className={`button is-link ${loading && "is-loading"}`}
            >
              Send
            </button>
          </div>
          <div className="control" onClick={() => navigate(-2)}>
            <button className="button is-link is-light">Cancel</button>
          </div>
        </div>

        <ToastContainer />
      </div>
    </>
  );
}

export default MessageUI;
