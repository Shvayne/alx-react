import React, { useState, useEffect } from "react";
import { StyleSheet, css } from "aphrodite";
import { PropTypes } from "prop-types";

const Login = ({ logIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

  function handleLoginSubmit(event) {
    event.preventDefault();
    logIn(email, password);
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  useEffect(() => {
    email === "" || password === ""
      ? setEnableSubmit(false)
      : setEnableSubmit(true);
  }, [email, password]);

  return (
    <>
      <p>Login to access the full dashboard</p>
      <form
        className={css(styles.large, styles.mobile)}
        onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChangeEmail}></input>
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChangePassword}></input>
        </div>
        <input type="submit" value="OK" disabled={!enableSubmit} />
      </form>
    </>
  );
};

Login.propTypes = {
  logIn: PropTypes.func,
};

const styles = StyleSheet.create({
  large: {
    "@media (min-width: 900px)": {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      gap: "1rem",
    },
  },

  mobile: {
    "@media (max-width: 900px)": {
      flexDirection: "column",
      gap: "0.5rem",
    },
  },
});

export default Login;