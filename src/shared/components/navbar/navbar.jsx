import React, { Component } from 'react'

export default class AppNavbar extends Component {

  constructor(prop) {
    super(prop);
    // setInterval(function() {console.log(window.offsetTop)}, 500);
    this.state = {
      isCompact: false
    }
  }

  menu = [
    { path:'home', title: 'Home' },
    { path:'about', title: 'About' },
    { path:'portfolio', title: 'Portfolio' },
    { path:'contact', title: 'Contact' },
    { path:'resume', title: 'Resume' },
  ]
  
  componentDidMount() {
    // setTimeout(() => this.setState({isLoading: false}), 2000);
  }

  render() {
    const { isCompact } = this.state
    return (
      <div className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="navbar">
        <div className="container">
          <a className="navbar-brand" href="#">Eleven Kings</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Wine</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Spirits</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Specialties</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Novelties</a></li>
            </ul>
          </div>
          <div className="user-profile">
            <div className="user-pic">
              <img src="#" alt="T"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
