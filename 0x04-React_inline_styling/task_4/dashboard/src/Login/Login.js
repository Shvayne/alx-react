import React from "react";
import { StyleSheet, css } from "aphrodite";

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


const Login = () => {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <div className={css(styles.large, styles.mobile)}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className={css(styles.email)}></input>
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className={css(styles.password)}></input>
        </div>
        <button>OK</button>
      </div>
    </>
  );
};


export default Login;