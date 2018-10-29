import React from "react";
import Users from "./Users";
import Messages from "./Messages";
import EnterChat from "./EnterChat";
import socketIOClient from "socket.io-client";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.socket = null;
    this.state = {
      username: "sep",
      id: "1",
      chat_ready: false,
      users: [],
      messages: [],
      message: ""
    };
  }
  componentDidMount() {
    if (this.state.username.length) {
      this.iniChat();
    }
  }
}

export default Chat;
