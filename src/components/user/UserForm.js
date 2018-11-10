import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import User from "./User";

class UserForm extends Component {
  state = {
    name: "",
    age: "",
    location: "",
    destination: "",
    departure: "",
    arrival: "",
    budget: ""
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  // onSubmit = e => {
  //   e.preventDefault();
  // };

  render() {
    const {
      name,
      age,
      location,
      destination,
      departure,
      arrival,
      budget
    } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header bg-success text-center">
          {" "}
          Please input your information{" "}
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name"> Name </label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Name"
                value={name}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="age"> Age </label>
              <input
                type="number"
                name="age"
                className="form-control form-control-lg"
                placeholder="Enter Age"
                value={age}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <i class="fas fa-map-marker-alt" />
              <label htmlFor="location"> Location </label>
              <input
                type="text"
                name="location"
                className="form-control form-control-lg"
                placeholder="Enter Your Location"
                value={location}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <i class="fas fa-map-marked-alt" />
              <label htmlFor="destination"> Destination </label>
              <input
                type="text"
                name="destination"
                className="form-control form-control-lg"
                placeholder="Enter Your Destination"
                value={destination}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <i class="fas fa-plane-departure" />
              <label htmlFor="departure"> Departure </label>
              <input
                type="date"
                name="departure"
                className="form-control form-control-lg"
                value={
                  departure // placeholder="Enter Your Destination"
                }
              />
            </div>

            <div className="form-group">
              <i class="fas fa-plane-arrival" />
              <label htmlFor="arrival"> Arrival </label>
              <input
                type="date"
                name="arrival"
                className="form-control form-control-lg"
                value={
                  arrival // placeholder="Enter Your Destination"
                }
              />
            </div>

            <div className="form-group">
              <i class="fas fa-dollar-sign" />
              <label htmlFor="budget"> Budget </label>
              <input
                type="number"
                name="budget"
                className="form-control form-control-lg"
                placeholder="Enter your budget"
                value={budget}
                onChange={this.onChange}
              />
            </div>

            {/* <input
              type="submit"
              value="Submit"
              className="btn btn-success btn-block"
            /> */}
            <Link
              onClick={this.toggleFragment}
              className="btn btn-success btn-block"
              to={"/app/user"}
              render={() => <User />}
            >
              Submit
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default UserForm;
