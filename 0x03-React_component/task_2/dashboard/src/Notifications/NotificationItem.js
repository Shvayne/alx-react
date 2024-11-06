import React from "react";
import PropTypes from "prop-types";

class NotificationItem extends React.Component {
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
        onClick={() => this.props.markAsRead(this.props.id)}>
        {this.props.value}
      </li>
    );
  }
}

export default NotificationItem;