import React, { Component } from "react";

import axios from "axios";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Chat from "./components/Chat/Chat";
import Register from "./components/auth/Register.js";
import Login from "./components/auth/Login.js";
import Home from "./components/auth/index.js";
import Navbar from "./components/layout/NavBar";
import User from "./components/user/User.js";
// import Register from "./components/auth/Register.js";
// import "./App.css";
import Contacts from "./components/contacts/Contacts.js";
// import UserForm from "./components/user/UserForm.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/user/").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  render() {
    return (
      <div className="body">
        <Navbar />
        {/* <UserForm /> */}
        {/* <Contacts /> */}
        {/* <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {/* {this.state.loggedIn &&
          <p>Join the party, {this.state.username}!</p>
        } } */}
        <header className="header">
          <div className="header__logo-box">
            {/* <img src="img/logo-white.png" alt="Logo" class="header__logo" /> */}
          </div>
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">globeTrotter</span>
              <span className="heading-primary--sub"> where life happens</span>
            </h1>
            <Route exact path="/" component={Home} />
            {/* <Route
          path="/login"
          render={() =>
            <Login
              updateUser={this.updateUser}
            />}
        /> */}

            <Link
              onClick={this.toggleFragment}
              className="button button--white button--animated"
              to={"/app/login"}
              render={() => <Login updateUser={this.updateUser} />}
            >
              Login
            </Link>
            <Link
              onClick={this.toggleFragment}
              className="button button--white button--animated"
              to={"/app/register"}
              render={() => <Register />}
            >
              Register
            </Link>
            <Link
              onClick={this.toggleFragment}
              className="button button--white button--animated"
              to={"/app/chat"}
              render={() => <Chat />}
            >
              Chat
            </Link>

            <Link
              onClick={this.toggleFragment}
              className="button button--white button--animated"
              to={"/app/contacts"}
              render={() => <Contacts />}
            >
              Contacts
            </Link>

            <Link
              onClick={this.toggleFragment}
              className="button button--white button--animated"
              to={"/app/user"}
              render={() => <User />}
            >
              User
            </Link>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
