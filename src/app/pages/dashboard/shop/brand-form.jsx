import React, { Component } from 'react'

export default class BrandForm extends Component {
  render() {
    return (
      <div id="profile">
        <h3 className="align-right">Shop</h3>
        <br />
        <h5>Add Brand</h5>
        <hr />
        <form >
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Brand name</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Founded Date</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div class="form-group">
            <label for="exampleInputFile">Brand Logo</label>
            <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
            <small id="fileHelp" class="form-text text-muted">Please upload either JPEG or PNG and nothing else.</small>
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
