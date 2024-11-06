import React from "react";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import "./Notifications.css";
import NotificationItemPropType from "./NotificationItemShape";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
  }

  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemPropType),
  };

  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
  };

  close() {
    console.log("Close button has been clicked");
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <>
        <div className="menuItem">
          <span>Your notifications</span>
        </div>
        {this.props.displayDrawer && (
          <div className="Notifications">
            {this.props.listNotifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <ul>
                  {this.props.listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={() => this.markAsRead(notification.id)}
                    />
                  ))}
                </ul>
              </>
            )}
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
              onClick={this.close}>
              <img src={closeIcon} alt="Close button"></img>
            </button>
          </div>
        )}
      </>
    );
  }
}

export default Notifications;