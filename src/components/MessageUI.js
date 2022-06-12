import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function MessageUI() {
  const [message, setMessage] = useState(`Hi. Your OTP is: 123456`);
  const location = useLocation();
  const info = location.state.info;
  const navigate = useNavigate();

  return (
    <>
      <div className="column">
        <div style={{ display: "inline-flex", alignItems: "center" }}>
          <figure className="image is-32x32 media-left">
            <img className="is-rounded" src={info.photo} alt={info.name} />
          </figure>
          <strong style={{ marginRight: 8 }}>To:</strong> {info.name}
          {", "}
          <p>{info.number}</p>
        </div>
        <div className="block"></div>
        <div class="field">
          <label class="label">Change Something, if you want to</label>
          <div class="control">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              class="textarea"
              placeholder="Textarea"
            ></textarea>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Send</button>
          </div>
          <div class="control" onClick={() => navigate(-2)}>
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageUI;
