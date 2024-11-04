import React from "react";
import { getFooterCopy, getFullYear } from "../utils/utils";
import "./Footer.css";

const footer = `Copyright ${getFullYear()} - ${getFooterCopy(true)}`;

export default function Footer() {
  return (
    <div className="App-footer">
      <p>{footer}</p>
    </div>
  );
}