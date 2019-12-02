import React, { Component } from 'react'
import AppNavbar from 'shared/components/navbar/navbar';

export default class Layout extends Component {
  render() {
    return (
      <div id="layout">
        <AppNavbar />
        <div className="" id="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}
