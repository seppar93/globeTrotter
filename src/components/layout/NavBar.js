import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import logo from '../../logo.svg';
import '../../App.css';
import axios from 'axios'

class Navbar extends React.Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this)
}

logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/user/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
        console.log('Logout error')
    })
  }
  render() {
    const loggedIn = this.props.loggedIn;
    console.log('navbar render, props: ')
    console.log(this.props);
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          globeTrotter
        </a>
        <div className="col-4" >
                        {loggedIn ? (
                            <section className="navbar-section">
                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                <span className="text-secondary">logout</span></Link>

                            </section>
                        ) : (
                                <section className="navbar-section">
                                    <Link to="/" className="btn btn-link text-secondary">
                                        <span className="text-secondary">home</span>
                                        </Link>
                                    <Link to="/login" className="btn btn-link text-secondary">
                                    <span className="text-secondary">login</span>
				</Link>
                                    <Link to="/signup" className="btn btn-link">
                                    <span className="text-secondary">sign up</span>
				</Link>
                                </section>
                            )}
                    </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item float-right">
              <a
                className="nav-link"
                target="_blank"
                href="https://github.com/seppar93/globeTrotter"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
