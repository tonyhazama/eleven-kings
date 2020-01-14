import React, { Component } from 'react'
import Table from 'shared/components/table/table';
import axios from 'axios';

export const columns = [
  {name: 'ID', id: 'id'},
  {name: 'Name', id: 'name'}
];

export const data = [
  {id: '001', name: 'Heyo'},
  {id: '001', name: 'Heyo'},
  {id: '001', name: 'Heyo'},
  {id: '001', name: 'Heyo'},
  {id: '001', name: 'Heyo'}
]

export default class Shop extends Component {
  render() {
    return (
      <div id="profile">
        <h3 className="align-right">Shop</h3>
        <br/>
        <h5>Brands</h5>
        <Table column={columns} data={data}></Table>
        {/* <div>
          <table className="table table-sm table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Brand Name</th>
                <th>Founded Date</th>
                <th>Total Product</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1232321</td>
                <th>Chivas Regal</th>
                <th>1992</th>
                <th>323</th>
              </tr>
              <tr>
                <td>1232321</td>
                <th>Chivas Regal</th>
                <th>1992</th>
                <th>323</th>
              </tr>
              <tr>
                <td>1232321</td>
                <th>Chivas Regal</th>
                <th>1992</th>
                <th>323</th>
              </tr>
              <tr>
                <td>1232321</td>
                <th>Chivas Regal</th>
                <th>1992</th>
                <th>323</th>
              </tr>
              <tr>
                <td>1232321</td>
                <th>Chivas Regal</th>
                <th>1992</th>
                <th>323</th>
              </tr>
              <tr>
                <td>1232321</td>
                <th>Chivas Regal</th>
                <th>1992</th>
                <th>323</th>
              </tr>
              <tr>
                <td>1232321</td>
                <th>Chivas Regal</th>
                <th>1992</th>
                <th>323</th>
              </tr>
            </tbody>
          </table>
        </div> */}
      </div>
    )
  }

  loadBrands() {
    axios.get('http://localhost:1111/products').then((response) => {
      console.log(response)
    }).catch((error) => console.log(error));
  }
}
