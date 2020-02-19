import React, { Component } from 'react'

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    // const {column = [], data = []} = this.props;
    // this.setState({column: column, data: data});
  }


  render() {
    const {column, data, tableId} = this.props;
    return (
      <table className="table table-sm table-hover">
        <thead>
          <tr>
            { column.map((col, i) => <th key={`${tableId}-th-${i}`}>{col.name}</th>) }
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowI) => <tr key={`${tableId}-tr-${rowI}`}>
            {column.map((col, colI) => <td key={`${tableId}-tr-${rowI}-td-${colI}`}>{row[col.id]}</td>)}
          </tr>) }
        </tbody>
      </table>
    )
  }
}

Table.defaultProps = {
  column: [],
  data: [],
  tableId: 'table'
}