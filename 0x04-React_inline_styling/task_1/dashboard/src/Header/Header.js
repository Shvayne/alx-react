import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  AppHeader: {
    borderBottom: "4px solid #e0354b",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "2rem",
  },

  heroHeader: {
    color: "#e0354b",
  },

  AppLogo: {
    width: "60%",
  },
});

const Header = () => {
  return (
    <div className={css(styles.AppHeader)}>
      <div className="logo">
        <img src={logo} alt="logo" className={css(styles.AppLogo)} />
      </div>
      <h1 className={css(styles.heroHeader)}>School dashboard</h1>
    </div>
  );
};

export default Header;