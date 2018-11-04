import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
<<<<<<< HEAD
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "./components/Chat/Chat";
=======
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Chat from "./components/Chat/Chat.js";
>>>>>>> 9c61f38250da1f9b74aa14b174362727aaf4ec9d
import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register.js";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/App/Chat" component={Chat} />
      <Route path="/App/Register" component={Register} />
      <Route path="/App/Login" component={Login} />
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
