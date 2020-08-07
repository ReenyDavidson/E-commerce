import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styling/NavBar.css";
import logo from "../navbar-logo.jpg";
import cart from "../cart.png";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="nav-container">
        <div className="brand-name" >
        <Link to="/">
            <strong>REACT-TEAM-K</strong>
        </Link>
        </div>
        <ul>
          <li className="nav-menu">
            <Link to="/">
              <img src={logo} alt="logo" className="nav-logo" />
            </Link>
          </li>
        </ul>
        <Link to="/cart">
          <button className="nav-button">
            <img src={cart} alt="cart" className="cart" />
          </button>
        </Link>
      </nav>
    );
  }
}
