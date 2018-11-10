import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "./components/Chat/Chat.js";
import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register.js";
import Contacts from "./components/contacts/Contacts";
import User from "./components/user/User.js";
import UserForm from "./components/user/UserForm";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/App/Chat" component={Chat} />
      <Route path="/App/Register" component={Register} />
      <Route path="/App/Login" component={Login} />
      <Route path="/App/Contacts" component={Contacts} />
      <Route path="/App/User" component={User} />
      <Route path="/App/UserForm" component={UserForm} />
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
