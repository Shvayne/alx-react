import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  red: {
    color: "red",
  },

  blue: {
    color: "blue",
  },

  mobile: {
    "@media (max-width: 900px)": {
      width: "100vw",
      fontSize: "20px",
      padding: "10px 8px",
      borderBottom: "1px solid #000",
    },
  },
});


class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
      __html: PropTypes.string,
    }),
    markAsRead: PropTypes.func,
  };

  static defaultProps = {
    type: "default",
  };

  render() {
    return (
      <li
        data-notification-type={this.props.type}
        dangerouslySetInnerHTML={this.props.html}
        className={css(
          this.props.type === "urgent" ? styles.red : styles.blue,
          styles.mobile
        )}
        onClick={() => this.props.markAsRead(this.props.id)}>
        {this.props.value}
      </li>
    );
  }
}

export default NotificationItem;