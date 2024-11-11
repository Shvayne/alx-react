import React from "react";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes, { symbol } from "prop-types";
import NotificationItemPropType from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  Notifications: {
    border: "2px dashed #e0354b",
    padding: "2rem",
    width: "30%",
    position: "absolute",
    top: "2rem",
    right: "1rem",
  },

  menuItem: {
    textAlign: "right",
  },

  mobileDrawer: {
    "@media (max-width: 900px)": {
      position: "static",
      border: "none",
      width: "100vw",
      height: "100vh",
      fontSize: "20px",
      padding: 0,
    },
  },

  mobileList: {
    "@media (max-width: 900px)": {
      listStyle: "none",
      padding: "0",
    },
  },

  mobileMenuItem: {
    "@media (max-width: 900px)": {
      display: "none",
    },
  },
});


class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
    this.close = this.close.bind(this);
  }

  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemPropType),
  };

  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
  };

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  close() {
    console.log("Close button has been clicked");
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  render() {
    return (
      <>
        <div
          className={css(
            styles.menuItem,
            this.props.displayDrawer && styles.mobileMenuItem
          )}>
          <span>Your notifications</span>
        </div>
        {this.props.displayDrawer && (
          <div className={css(styles.Notifications, styles.mobileDrawer)}>
            {this.props.listNotifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <ul className={css(styles.mobileList)}>
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
              onClick={this.close()}>
              <img src={closeIcon} alt="Close button"></img>
            </button>
          </div>
        )}
      </>
    );
  }
}


export default Notifications;