import React, { Component } from "react";
import "./Contacts";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";
class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Johnny Neagoe",
        age: "25",
        destination: "Dublin",
        departure: "2019-08-12",
        arrival: "2019-08-20",
        budget: "10000"
      },
      {
        id: 2,
        name: "Harsh Ratna",
        age: "32",
        destination: "Vienna",
        departure: "2018-11-27",
        arrival: "2018-12-05",
        budget: "5000"
      },
      {
        id: 3,
        name: "Ernst Logan",
        age: "25",
        destination: "Toronto",
        departure: "2019-04-26",
        arrival: "2019-05-26",
        budget: "17520"
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}
export default Contacts;
