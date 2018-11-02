import React, { Component } from "react";
import API from "../../utilis/API"

class Register extends Component {
  state = {
    email: " ",
    password: " "
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
        API.saveUser({
        email: this.state.email,
        password: this.state.password,
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center pb-4 pt-3">
                <span className="text-primary">
                  <i className="fas fa-lock" /> Register
                </span>
              </h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    required
                    value={this.state.email}
                    onChange={this.handleInputChange}
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
                    onChange={this.handleInputChange}
                  />
                </div>
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-primary btn-block"
                  disabled={!(this.state.email && this.state.password)}
                  onClick={this.handleFormSubmit}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
