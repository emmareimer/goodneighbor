import React from 'react'
import { } from 'react-bootstrap'
import gnLogo from "./goodneighbor.png"

export default function Footer() {
  return (
    <div className="container-center-horizontal">
      <div className="center-text footer">
      Be a <span className="logo-text">
        <img
              src={gnLogo}
              className="logo"
              alt="goodneighbor Logo"
          />
      </span>
      </div>
    </div>
  );
}

