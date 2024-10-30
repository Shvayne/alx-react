import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import closeIcon from "../assets/close-icon.png";

const notifications = [
  { text: "New course available", priority: "default", id: 1 },
  { text: "New resume available", priority: "urgent", id: 2 },
];

const dangerousHTML = { __html: getLatestNotification() };

function close() {
  console.log("Close button has been clicked");
}

export default function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id} data-priority={notification.priority}>
            {notification.text}
          </li>
        ))}
        <li dangerouslySetInnerHTML={dangerousHTML} data-priority="urgent"></li>
      </ul>
      <button
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          background: "transparent",
          border: "none",
          fontSize: "2rem",
          cursor: "pointer",
        }}
        aria-label="close"
        onClick={close}>
        <img src={closeIcon} alt="Close button"></img>
      </button>
    </div>
  );
}