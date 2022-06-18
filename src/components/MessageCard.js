import React from "react";
const monthARR = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getTime = (date) =>
  date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

function MessageCard({ contact, message }) {
  const date = new Date(message.date);
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  return (
    <div
      style={{ cursor: "pointer", marginBottom: 1, marginTop: 0 }}
      className="box media"
    >
      <div className="media-left">Sent To:</div>

      <div className="media-content">
        <div className="content">
          <p>
            <strong>{message.to}</strong>{" "}
            <small>
              on {day}, {monthARR[month]} {year} at {getTime(date)}
            </small>
            <br />
            <strong>Message</strong>: {message.body}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MessageCard;
