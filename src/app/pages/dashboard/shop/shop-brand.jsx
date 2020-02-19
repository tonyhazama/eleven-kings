import React, { Component } from 'react'

export default class ShopBrand extends Component {
  render() {
    return (
      <div id="shop-brand">
        <h3 className="align-right">Brand</h3>
        <br/>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Brand Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Brand Name" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Founded date</label>
            <input type="date" className="form-control" id="exampleInputEmail1" placeholder="Enter Founded date" />
          </div>
        </form>
      </div>
    )
  }
}
