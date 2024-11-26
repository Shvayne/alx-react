import React from "react";
import { getFooterCopy, getFullYear } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";
import { AppContext } from "../App/AppContext";

const footer = `Copyright ${getFullYear()} - ${getFooterCopy(true)}`;

const Footer = () => {
  const { user } = React.useContext(AppContext);

  return (
    <div className={css(footerStyles.AppFooter)}>
      <p>{footer}</p>
      {user.isLoggedIn && <a className={css(footerStyles.link)}>Contact us</a>}
    </div>
  );
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

export default Footer;
