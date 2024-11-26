import React from "react";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemPropType from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

class Notifications extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemPropType),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func,
  };

  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
    markNotificationAsRead: () => {},
  };

  render() {
    return (
      <>
        <div
          className={css(
            styles.menuItem,
            styles.hover,
            this.props.displayDrawer && styles.mobileMenuItem
          )}
          onClick={this.props.handleDisplayDrawer}>
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
                      markAsRead={() =>
                        this.props.markNotificationAsRead(notification.id)
                      }
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
              onClick={this.props.handleHideDrawer}>
              <img src={closeIcon} alt="Close button"></img>
            </button>
          </div>
        )}
      </>
    );
  }
}

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
    position: "absolute",
    top: "1rem",
    right: "1rem",
    cursor: "pointer",
    backgroundColor: "#fff8f8",
  },

  hover: {
    ":hover": {
      animationName: [opacityKeyFrames, translateKeyFrames],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3",
    },
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
    display: "none",
  },
});

const opacityKeyFrames = {
  from: {
    opacity: 0.5,
  },
  to: {
    opacity: 1,
  },
};

const translateKeyFrames = {
  "0%": {
    transform: "translateY(0px)",
  },
  "50%": {
    transform: "translateY(-5px)",
  },
  "100%": {
    transform: "translateY(5px)",
  },
};

export default Notifications;
