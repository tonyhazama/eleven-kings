import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Profile from './profile';
import Shop from './shop/shop'



export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.menu = [
      { name: 'Profile', path: 'profile' },
      { name: 'Shop', path: 'shop' },
      { name: 'Settings', path: 'settings' },
    ];
    this.state = {
      activeMenu: {}
    }
  }
  
  componentDidMount() {
    let screen = this.props.match.params.screen;
    if (!!screen) {
      this.changePage(screen)
    } else {
      this.setState({activeMenu: 'profile'})
    }
  }

  changePage(page = '') {
    this.setState({activeMenu: page});
    this.props.history.push(page);
    // this.
  }
  
  
  render() {
    return (
      <div className="container"  style={{paddingTop: '100px'}}>
        <div id="dashboard">
          {/* <h4>Dashboard</h4>
          <hr className="mb-4" /> */}
          <div className="row">
            {/* Sidebar */}
            <div className="col-md-3" id="dashSidebar">
              <div className="list-group mb-4">
                { this.menu.map(({path, name}, i) => {
                  const isActive = (path === this.state.activeMenu);
                  return (
                    <div key={"dashMenu"+i} onClick={() => this.changePage(path)}
                    className={"list-group-item list-group-item-action " + (isActive && " active") }>
                      {name}
                    </div>
                  )
                })}
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Aliquid, incidunt repudiandae recusandae sunt iste eveniet 
                  labore beatae provident voluptatum ea eligendi pariatur minus, 
                  aliquam ad ex! Sapiente praesentium tenetur hic.
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="col-md-9" id="dashContainer">
              {/* <pre>{JSON.stringify(this.state, '', 2)}</pre> */}
              <Switch>
                <Redirect exact from="/dashboard" to="/dashboard/profile" />
                <Route exact path="/dashboard/profile" component={Profile} />
                <Route exact path="/dashboard/shop" component={Shop} />
                {/* <Redirect ></Redirect> */}
                <Route path='*' exact={true} component={My404Component} />
                  {/* <Route path="/topics" component={Topics} /> */}
              </Switch>
            </div>
          </div>

        </div>
      </div>
     )
  }
}


export const My404Component = () => {
  return (
    <div className="jumbotron text-center">
      <h1>PAGE NOT FOUND</h1>
      <p>You seem lost, here take a shot to clear up your mind</p>
      <br />
      <a className="btn btn-primary" href="#" role="button">OOPS, WRONG ROOM</a>
    </div>
  )
}