import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styling/NavBar.css";
import logo from "../logo1.png";
import cart from "../cart.png";

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <img src={logo} alt="logo" className="nav-logo" />
        </Link>
        <ul>
          <li className="nav-menu">
            <Link to="/">
              <p>REACT-K</p>
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
