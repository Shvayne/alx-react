import React from 'react';
import logo from "./holberton-logo.jpg";
import './App.css';
import { getFooterCopy, getFullYear } from "./utils";

function App() {
  return (
    <div>
      <div className="App-header">
        <img src={logo} alt="holberton Logo" />
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email'/>
        <label htmlFor='password'>password</label>
        <input id='password' type='password'/>
        <button>OK</button>
      </div>
      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
      </div>
    </div>
  );
}

export default App;
