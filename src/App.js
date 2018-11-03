import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
// import Navbar from "./components/layout/NavBar.js";
// import ChatBox from "./components/Chat/ChatBox";
// import Register from "./components/auth/Register.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header class="header">
          <div class="header__logo-box">
            {/* <img src="img/logo-white.png" alt="Logo" class="header__logo" /> */}
          </div>
          <div class="header__text-box">
            <h1 class="heading-primary">
              <span class="heading-primary--main">Travel</span>
              <span class="heading-primary--sub"> is where life happens</span>
            </h1>
            <Link
              onClick={this.toggleFragment}
              className="btn btn--white btn--animated"
              to={"/app/login"}
            >
              Login
            </Link>
            <Link
              onClick={this.toggleFragment}
              className="btn btn--white btn--animated"
              to={"/app/register"}
            >
              Register
            </Link>
            <Link
              onClick={this.toggleFragment}
              className="btn btn--white btn--animated"
              to={"/app/chat"}
            >
              Chat
            </Link>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default App;
