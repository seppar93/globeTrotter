import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
          User Information{" "}
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
              />
            </div>

            <div className="form-group">
              <label htmlFor="location"> Location </label>
              <input
                type="text"
                name="location"
                className="form-control form-control-lg"
                placeholder="Enter Your Location"
                value={location}
              />
            </div>

            <div className="form-group">
              <label htmlFor="destination"> Destination </label>
              <input
                type="text"
                name="destination"
                className="form-control form-control-lg"
                placeholder="Enter Your Destination"
                value={destination}
              />
            </div>

            <div className="form-group">
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
              <label htmlFor="budget"> Budget </label>
              <input
                type="number"
                name="budget"
                className="form-control form-control-lg"
                placeholder="Enter your budget"
                value={budget}
              />
            </div>

            <input
              type="submit"
              value="Submit"
              className="btn btn-success btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default UserForm;
