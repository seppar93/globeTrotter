import React, { Component } from "react";
import "./User.css";
import Navbar from "../layout/NavBar";
import MapContainer from "../googleAPI/Map.js";
import Budget from "./Budget.js";
// import I01d from "../../profilePic";
import { Link } from "react-router-dom";
import Contacts from "../contacts/Contacts";

class App extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    let path = `app/chat`;
    this.props.history.push(path);
  }
  // getWeatherIconImage(icon) {
  //   switch (icon) {
  //     case "01d":
  //       return I01d;
  //     default:
  //       break;
  //   }
  // }
  render() {
    return (
      <div className="outside">
        <Navbar />
        <div className="container emp-profile">
          <form method="post">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img alt="profile" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <h3>Sepehr Parirokh</h3>
                  {/* TODO: adding location form UserForm */}
                  <i class="fas fa-map-marker-alt"> Toronto </i>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <h3 className="nav-link ">About:</h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="profile-work">
                  <p> ADD MAP</p>
                  <p> ADD CALANDER</p>
                </div>
              </div>
              <div className="col-md-8">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Age:</label>
                      </div>
                      <div className="col-md-6">
                        {/* TODO: adding inforamtion from forgroup */}
                        <i> 25 </i>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Destination:</label>
                      </div>
                      <div className="col-md-6">
                        {/* TODO: adding inforamtion from forgroup */}
                        <i class="fas fa-map-marked-alt"> Tokyo</i>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Departure:</label>
                      </div>
                      <div className="col-md-6">
                        <i class="fas fa-plane-departure"> 2019-01-25</i>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Arrival:</label>
                      </div>
                      <div className="col-md-6">
                        <i class="fas fa-plane-arrival">2019-01-06</i>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Budget</label>
                      </div>
                      <div className="col-md-6">
                        <i class="fas fa-dollar-sign">10,000</i>
                      </div>
                    </div>
                    <Link
                      onClick={this.toggleFragment}
                      className="button button--white button--animated"
                      to={"/app/contacts"}
                      render={() => <Contacts />}
                    >
                      Chat with travelers
                    </Link>
                  </div>
                </div>
              </div>

              <Budget />
              <div className="mapClass">
                <MapContainer className="mapClass" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
