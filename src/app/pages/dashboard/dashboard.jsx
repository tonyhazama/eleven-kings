import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Profile from './profile';
import Shop from './shop/shop'
import ListGroup from 'shared/components/list-group/list-group';
import ShopBrand from './shop/shop-brand';
import ShopProduct from './shop/shop-product';



export default class Dashboard extends Component {

  menu = [
    { name: 'Profile', path: 'profile', children: [] },
    { name: 'Shop', path: 'shop', children: [
      { name: 'Brand', path: 'brand' },
      { name: 'Product', path: 'product' }
    ] },
    { name: 'Settings', path: 'settings', children: [] },
    { name: 'Settings', path: 'sese', children: [] },
    { name: 'Settings', path: 'keke', children: [] },
    { name: 'Settings', path: 'dede', children: [] },
  ];

  constructor(props) {
    super(props);
    
    // Check initial menu
    const { menu, submenu } = this.props.match.params;
    let initialPath = (menu || 'profile' ) + '/' + (submenu || '');
    
    this.state = {
      activeMenu: initialPath
    }

  }
  
  componentWillMount() {
    // this.setState({activeMenu: screen});
  }

  componentDidMount() {
    const { activeMenu } = this.state;
    if (activeMenu !== 'profile') {
      this.props.history.push(activeMenu);
    }
  }

  changePage(page = '') {
    console.log('change page to ' + page);
    this.setState({activeMenu: page});
    this.props.history.push('/dashboard/'+page);
    // this.
  }
  
  
  render() {
    return (
      <div className="container app-container">
        <div id="dashboard">
          {/* <h4>Dashboard</h4>
          <hr className="mb-4" /> */}
          <div className="row">
            {/* Sidebar */}
            <div className="col-md-3" id="dashSidebar">
              <ListGroup list={this.menu} change={e => this.changePage(e)} initialKey={this.state.activeMenu} />
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
              <Redirect exact from="/dashboard" to="/dashboard/profile" />
              <Switch>
                <Route exact path="/dashboard/profile" component={Profile} />
                <Route exact path="/dashboard/shop" component={Shop} />
                <Route exact path="/dashboard/shop/brand" component={ShopBrand} />
                <Route exact path="/dashboard/shop/product" component={ShopProduct} />
                <Route path='*' exact={true} component={My404Component} />
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



/*
<div className="list-group mb-4">
                { this.menu.map(({path, name, children}, i) => {
                  const isActive = (path === this.state.activeMenu);
                  return (
                    <React.Fragment>
                      <div key={"dashMenu"+i} onClick={() => this.changePage(path)}
                      className={"list-group-item list-group-item-action " + (isActive && " active") }>
                        {name}
                      </div>
                        { children.map(({path, name}, ci) => {
                          return isActive ? <div key={"dashMenu"+i+ci} className={"list-group-item child "}>{name}</div> : null;
                        }) }
                    </React.Fragment>
                  )
                })}
              </div>
              */