import React from "react";
import "./NavBar.css";
import Home from "../auth/index.js";
import App from "../../App";
import { Route, Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link
                onClick={this.toggleFragment}
                className="navigation__link"
                to={"/"}
                render={() => <App />}
              >
                Home
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                onClick={this.toggleFragment}
                className="navigation__link"
                to={"/app/user"}
                render={() => <App />}
              >
                Account
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                onClick={this.toggleFragment}
                className="navigation__link"
                to={"/app/contacts"}
                render={() => <App />}
              >
                Contacts
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                onClick={this.toggleFragment}
                className="navigation__link"
                to={"/app/contacts"}
                render={() => <App />}
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
