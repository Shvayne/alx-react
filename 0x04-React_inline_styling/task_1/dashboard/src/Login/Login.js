import React from "react";
import { StyleSheet, css } from "aphrodite";

const Login = () => {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        className={css(styles.email)}></input>
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        className={css(styles.password)}></input>
      <button>OK</button>
    </>
  );
};

const styles = StyleSheet.create({
  email: {
    marginRight: "2rem",
  },

  password: {
    marginRight: "2rem",
  },
});

export default Login;