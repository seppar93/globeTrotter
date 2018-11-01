import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./components/layout/NavBar.js";
import ChatBox from "./components/ChatBox";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="content">
          <div className="header__text-box">
            <Link
              onClick={this.toggleFragment}
              className="btn btn--white btn--animated"
              to={"/Chat"}
            >
              Login
            </Link>
            <Link
              onClick={this.toggleFragment}
              className="btn btn--white btn--animated"
              to={"/"}
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
        </div>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default App;
