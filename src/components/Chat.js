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
      this.initChat();
    }
  }
  initChat() {
    this.setState({
      chat_ready: true
    });
    this.socket = socketIOClient("ws://localhost:8989", {
      query: `username=${this.state.username}&id=${this.state.id}`
    });
    this.socket.on(
      "updateUsersList",
      function(users) {
        console.log(users);
        this.setState({
          users: users
        });
      }.bind(this)
    );
    this.socket.on(
      "message",
      function(message) {
        this.setState({
          messages: this.state.messages.concat([message])
        });
        this.scrollToBottom();
      }.bind(this)
    );
  }
}

export default Chat;
