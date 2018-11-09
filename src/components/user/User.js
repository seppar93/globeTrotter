import React, { Component } from "react";
import "./User.css";
import Navbar from "../layout/NavBar";
import MapContainer from "../googleAPI/Map.js";
import Budget from "./Budget.js";
class App extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    let path = `app/chat`;
    this.props.history.push(path);
  }
  render() {
    return (
      <div className="outside">
        <Navbar />
        <div className="container emp-profile">
          <form method="post">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                    alt="profile"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <h5>JOHN DOE</h5>
                  {/* TODO: adding location form UserForm */}
                  <i class="fas fa-map-marker-alt"> LOCATION </i>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <p className="nav-link ">About</p>
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
                        <i> 32 </i>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Destination:</label>
                      </div>
                      <div className="col-md-6">
                        {/* TODO: adding inforamtion from forgroup */}
                        <i class="fas fa-map-marked-alt"> Dubai</i>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Departure:</label>
                      </div>
                      <div className="col-md-6">
                        <i class="fas fa-plane-departure"> 2018-12-25</i>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Arrival:</label>
                      </div>
                      <div className="col-md-6">
                        <i class="fas fa-plane-arrival">2018-12-25</i>
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
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Experience</label>
                      </div>
                      <div className="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Hourly Rate</label>
                      </div>
                      <div className="col-md-6">
                        <p>10$/hr</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Total Projects</label>
                      </div>
                      <div className="col-md-6">
                        <p>230</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>English Level</label>
                      </div>
                      <div className="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Availability</label>
                      </div>
                      <div className="col-md-6">
                        <p>6 months</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <label>Your Bio</label>
                        <br />
                        <p>Your detail description</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Budget />
              {/* <div className="mapClass">
                <MapContainer className="mapClass" />
              </div> */}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
