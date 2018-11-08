import React, { Component } from "react";
import "./Contacts";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";
class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "henery johns",
        email: "henery59@gmail.com",
        phone: "12345"
      },
      {
        id: 2,
        name: "babaanoosh",
        email: "hentilover59@gmail.com",
        phone: "12345"
      },
      {
        id: 3,
        name: "bob dole",
        email: "analfister59@gmail.com",
        phone: "12345"
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
