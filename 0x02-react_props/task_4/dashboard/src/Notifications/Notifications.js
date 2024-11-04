import React from "react";
import { getLatestNotification } from "../utils/utils";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import "./Notifications.css";

const notifications = [
  { text: "New course available", priority: "default", id: 1 },
  { text: "New resume available", priority: "urgent", id: 2 },
  { html: { __html: getLatestNotification() }, priority: "urgent", id: 3 },
];

function close() {
  console.log("Close button has been clicked");
}

const Notifications = ({ displayDrawer = false }) => {
  return (
    <>
      <div className="menuItem">
        <span>Your notifications</span>
      </div>
      {displayDrawer && (
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <ul>
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                type={notification.priority}
                value={notification.text}
                html={notification.html}
              />
            ))}
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
      )}
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

export default Notifications;