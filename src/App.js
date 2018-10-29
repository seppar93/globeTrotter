import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="content">
          <div className="header__text-box">
            <Link
              onClick={this.toggleFragment}
              className="btn btn--white btn--animated"
              to={"/"}
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
              to={"/"}
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
