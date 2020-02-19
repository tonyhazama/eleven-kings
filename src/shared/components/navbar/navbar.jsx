import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class AppNavbar extends Component {

  constructor(prop) {
    super(prop);
    // setInterval(function() {console.log(window.offsetTop)}, 500);
    this.state = {
      isCompact: false,
      noImage: false
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

  onUserPicError(e) {
    this.setState({noImage: true});
  }

  render() {
    const { isCompact, noImage } = this.state
    const userInitial = 'T';
    const userColorTheme = 'skyblue';
    return (
      <div className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">Eleven Kings</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><a className="nav-link" href="#">Wine</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Spirits</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Specialties</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Novelties</a></li>
            </ul>
          </div>
          <div className="user-profile dropdown">
            <div className="user-picture-container" style={{backgroundColor: userColorTheme}} id="dropdownMenuLink" data-toggle="dropdown">
              { noImage ? (
                <div className='user-initial'>{userInitial}</div>
              ) : (
                <img className='user-picture' alt="pic" src="#" onError={e => this.onUserPicError(e)}/>
              )}
            </div>
            <div className="dropdown-menu dropdown-menu-right" id="navbaUserMenu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="#">My Profile</a>
              <a className="dropdown-item" href="#">Dashboard</a>
              <a className="dropdown-item" href="#">Settings</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
