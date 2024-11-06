import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email: </label>
      <input type="email" id="email" name="email" placeholder="Email"></input>
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"></input>
      <button>OK</button>
    </>
  );
}