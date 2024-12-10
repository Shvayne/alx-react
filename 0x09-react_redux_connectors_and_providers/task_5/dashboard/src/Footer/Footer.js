import React from "react";
import { getFooterCopy, getFullYear } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const footer = `Copyright ${getFullYear()} - ${getFooterCopy(true)}`;

const Footer = () => {
  return (
    <div className={css(footerStyles.AppFooter)}>
      <p>{footer}</p>
      {this.props.user.isLoggedIn && (
        <a className={css(footerStyles.link)}>Contact us</a>
      )}
    </div>
  );
};

Footer.propTypes = {
  user: PropTypes.object,
};

Footer.defaultProps = {
  user: {},
};

const footerStyles = StyleSheet.create({
  AppFooter: {
    textAlign: "center",
    height: "10vh",
    borderTop: "4px solid #e0354b",
    fontStyle: "italic",
  },

  link: {
    cursor: "pointer",
  },
});

export const mapStateToProps = (state) => ({
  user: state.get("user"),
});

export default connect(mapStateToProps, null)(Footer);