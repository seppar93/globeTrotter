import React, { Component } from "react";
import "./Contacts";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import Chat from "../Chat/Chat.js";
import {  Link } from "react-router-dom";
import NavBar from "../layout/NavBar";

class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  render() {
    const {
      name,
      age,
      destination,
      departure,
      arrival,
      budget
    } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div onClick={this.onShowClick} className="card card-body mb-3">
        <h4>
          {" "}
          {name} <i className="fas fa-sort-down" />{" "}
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item"> Age: {age} </li>
            <li className="list-group-item">
              {" "}
              <i class="fas fa-map-marked-alt" /> Destination: {destination}{" "}
            </li>
            <li className="list-group-item">
              {" "}
              <i class="fas fa-plane-departure" /> Departure: {departure}{" "}
            </li>
            <li className="list-group-item">
              {" "}
              <i class="fas fa-plane-arrival" /> Arrival: {arrival}{" "}
            </li>
            <li className="list-group-item">
              {" "}
              <i class="fas fa-dollar-sign" /> Budget: {budget}{" "}
            </li>
            <Link
              onClick={this.toggleFragment}
              className="btn btn-success btn-block"
              to={"/app/chat"}
              render={() => <Chat />}
            >
              Chat
            </Link>
          </ul>
        ) : null}
        <NavBar />
      </div>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
