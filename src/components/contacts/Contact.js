import React, { Component } from "react";

class Contact extends Component {
  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  render() {
    // const {name, email, id} this
    return (
      <div onClick={this.onShowClick} className="card card-body mb-3">
        <h4>
          <i style={{ cursor: "pointer" }} className="fas fa-sort-down" />
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick}
          >
            {" "}
          </i>
        </h4>
        {showContactInfo ? ( // we have tertiary oprator allowing ous to use onclick when we change the state
          <ul className="list-group">
            <li className="list-group-item"> Email: {email} </li>
            <li className="list-group-item"> Phone: {phone} </li>
          </ul>
        ) : null}
      </div>
    );
  }
}
