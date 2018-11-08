import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ChatBox from "./components/chat/ChatBox.js";
import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register.js";
import Contacts from "./components/contacts/Contacts";
import User from "./components/user/User.js";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/App/ChatBox" component={ChatBox} />
      <Route path="/App/Register" component={Register} />
      <Route path="/App/Login" component={Login} />
      <Route path="/App/Contacts" component={Contacts} />
      <Route path="/App/User" component={User} />
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
