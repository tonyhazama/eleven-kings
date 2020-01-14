import React, { Component } from 'react'

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    const {column = [], data = []} = this.props;
    return (
      <table className="table table-sm table-hover">
        <thead>
          <tr>
            { column.map(col => <th>{col.name}</th>) }
          </tr>
        </thead>
        <tbody>
          {data.map(row => <tr>
            {column.map(field => <td>{row[field.id]}</td>)}
          </tr>) }
        </tbody>
      </table>
    )
  }
}
