import React from "react";

class EnterChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  changeUsername(event) {
    event.preventDfault();
    if (this.state.username.length) {
      this.props.setUsername(this.state.username);
    } else {
      alert("Please Provide a username");
    }
  }

  onChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="enter-chat d-flex justify-content-center align-items-center">
        <form
          className="col-xs-12 col-sm-12 col-md-6 col-lg-4"
          onSubmit={this.changeUsername.bind(this)}
        >
          <React.Fragment>
            <div className="input-group ">
              <input
                className="form-control"
                placeholder="Username"
                value={this.state.username}
                onChange={this.onChange.bind(this)}
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="submit">
                  Join
                </button>
              </div>
            </div>
          </React.Fragment>
        </form>
      </div>
    );
  }
}
export default EnterChat;
