import React from 'react';
import './Notifications.css';
import closeIcon from "./close-icon.png";
import { getLatestNotification } from './utils';

export default function Notifications(){
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
      <button
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          background: "transparent",
          border: "none",
          fontSize: "2rem",
          cursor: "pointer",
        }}
        aria-label="close"
        onClick={console.log("Close button has been clicked")}>
        <img src={closeIcon} alt="Close button"></img>
      </button>
    </div>
  );
}