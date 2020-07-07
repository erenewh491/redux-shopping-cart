import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";
export class header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Shopping Cart</h1>
        <Link to="/" style={{ color: "#fff" }}>
          Home
        </Link>
      </div>
    );
  }
}

export default header;
