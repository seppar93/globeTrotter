import React, { Component } from "react";
import "./User.css";
import Navbar from "../layout/NavBar";
import MapContainer from "../googleAPI/Map.js"
class App extends Component {
  constructor() {
    super();
    this.routeChange = this.routeChange.bind(this);
     }
     routeChange(){
      let path = `app/chat`;
      this.props.history.push(path);
      }
  render() {
    return (
      <div>
        <Navbar />
        <div id="user-profile-2" className="user-profile">
          <div className="tabbable">
            <div className="tab-content no-border padding-24">
              <div id="home" className="tab-pane in active">
                <div className="row">
                  <div className="col-xs-12 col-sm-3 center">
                    <span className="profile-picture">
                      <img
                        className="editable img-responsive"
                        alt=" Avatar"
                        id="avatar2"
                        src="http://bootdey.com/img/Content/avatar/avatar6.png"
                      />
                    </span>
                    <div className="space space-4" />
                    {/* TODO: add method lead to google API and Calander API */}
                    <a href="#" className="btn btn-sm btn-block btn-success">
                      <i className="ace-icon fa fa-plus-circle bigger-120" />
                      <span className="bigger-110">Travel Map </span>
                    </a>
                    <a href="#" className="btn btn-sm btn-block btn-primary">
                      <i className="ace-icon fa fa-envelope-o bigger-110" />
                      <span className="bigger-110"> Travel Schdules </span>
                    </a>
                  </div>
                  {/* /.col */}
                  <div className="col-xs-12 col-sm-9">
                    <h4 className="blue">
                      <span className="middle">John Doe</span>
                    </h4>
                    <div className="profile-user-info">
                      <div className="profile-info-row">
                        {/* TODO: add method lead to google API and Calander API */}
                        <div className="profile-info-name"> Username </div>
                        <div className="profile-info-value">
                          <span> EMAIL</span>
                        </div>
                      </div>
                      <div className="profile-info-row">
                        <div className="profile-info-name"> Location </div>
                        <div className="profile-info-value">
                          <i className="fa fa-map-marker light-orange bigger-110" />
                          {/* TODO: add method lead to google API and Calander API */}
                          <span>Netherlands</span>
                          <span>Amsterdam</span>
                        </div>
                      </div>
                      <div className="profile-info-row">
                        <div className="profile-info-name"> Age </div>
                        <div className="profile-info-value">
                          <span>38</span>
                        </div>
                      </div>
                      <div className="profile-info-row">
                        <div className="profile-info-name"> Last Online </div>
                        <div className="profile-info-value">
                          <span>3 hours ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="hr hr-8 dotted" />
                    <div className="profile-user-info">
                      <div className="profile-info-row">
                        <div className="profile-info-name">CHAT</div>
                        <div className="profile-info-value">
                        <input
                          type="submit"
                          value="Chat"
                          className="btn btn-success btn-block col-1"
                          onClick={this.handleSubmit}
                        />
                        </div>
                      </div>
                    </div>
                 
                  </div>
                </div>
                <div className="space-20" />
                <div className="row">
                  <div className="col-xs-12 col-sm-3">
                    <div className="widget-box transparent">
                      <div className="widget-header widget-header-small">
                        <h4 className="widget-title smaller">
                          <i className="ace-icon fa fa-check-square-o bigger-110" />
                          Little About Me
                        </h4>
                      </div>
                      <div className="widget-body">
                        <div className="widget-main">
                          <p>
                            My job is mostly lorem ipsuming and dolor sit
                            ameting as long as consectetur adipiscing elit.
                          </p>
                          <p>
                            Sometimes quisque commodo massa gets in the way and
                            sed ipsum porttitor facilisis.
                          </p>
                          <p>
                            The best thing about my job is that vestibulum id
                            ligula porta felis euismod and nullam quis risus
                            eget urna mollis ornare.
                          </p>
                          <p>Thanks for visiting my profile.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mapClass">
                      <MapContainer className="mapClass"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-3">
                  {/* <Calendar /> Calendar goes here */ }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
