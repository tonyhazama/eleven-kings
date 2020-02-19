import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from './pages/splash';
import Home from './pages/home/home';
import Dashboard from './pages/dashboard/dashboard'
import Layout from 'app/layout/layout';

export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    // setTimeout(() => this.setState({isLoading: false}), 1000);
    this.setState({isLoading: false})
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? (
      <Splash />
    ) : (
      <Router basename={process.env.PUBLIC_URL}>
        <Layout>
          <Switch>
            {/* <div id="router-wrapper"> */}
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/dashboard/" component={Dashboard} />
              <Route exact path="/dashboard/:menu/:submenu?" component={Dashboard} />
              {/* <Route path="*" component={My404Component} exact /> */}
            {/* </div> */}
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export const My404Component = () => {
  return (
    <div className="jumbotron text-center">
      <h1>PAGE NOT FOUND</h1>
      <p>You seem lost, here take a shot to clear up your mind</p>
      <br />
      <a className="btn btn-primary" href="#" role="button">BACK</a>
    </div>
  )
}
