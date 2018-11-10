import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Navbar from "../layout/NavBar";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");
    axios
      .post("/user/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        // if (response.status === 200) {
        //   // update App.js state
        //   this.props.updateUser({
        //     loggedIn: true,
        //     username: response.data.username
        //   });
        // }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
      let path = `/app/user`;
      this.props.history.push(path);
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="row">
          <Navbar />
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <h1 className="text-center pb-4 pt-3">
                  <span className="text-success">
                    <i className="fas fa-lock" /> Login
                  </span>
                </h1>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      placeholder="Username"
                      required
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      required
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-success btn-block"
                    onClick={this.handleSubmit}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Login;
