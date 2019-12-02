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
      <div class="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="navbar">
        <div className="container">
          <a class="navbar-brand" href="#">Eleven Kings</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active"><a class="nav-link" href="#">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Wine</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Spirits</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Specialties</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Novelties</a></li>
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
