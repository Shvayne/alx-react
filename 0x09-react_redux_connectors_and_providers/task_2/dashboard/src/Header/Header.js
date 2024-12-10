import React, { useContext } from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";
import { logout } from "../actions/uiActionCreators";
import PropTypes from "prop-types";

const Header = () => {
  return (
    <div className={css(styles.AppHeader)}>
      <div className="logo">
        <img src={logo} alt="logo" className={css(styles.AppLogo)} />
      </div>
      <h1 className={css(styles.heroHeader)}>School dashboard</h1>
      {user.isLoggedIn && (
        <section id="logoutSection">
          <p>
            Welcome {this.props.user.email}{" "}
            <a onClick={logout} className={css(styles.link)}>
              Logout
            </a>
          </p>
        </section>
      )}
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.object,
};

Header.defaultProps = {
  user: {},
};

const styles = StyleSheet.create({
  AppHeader: {
    borderBottom: "4px solid #e0354b",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
  },

  heroHeader: {
    color: "#e0354b",
  },

  AppLogo: {
    width: "60%",
  },

  link: {
    cursor: "pointer",
  },
});

const mapStateToProps = (state) => ({
  user: state.get("user"),
});

export default connect(mapStateToProps, logout)(Header);