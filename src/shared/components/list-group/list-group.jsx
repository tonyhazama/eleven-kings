import React, { Component } from 'react'

export default class ListGroup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeMenu: '',
    }
  }

  componentDidMount() {
    console.log(this.props)
    this.onSelect(this.props.initialKey);
  }

  onSelect(path) {
    this.setState({activeMenu: path});
    this.props.change(path);
  }

  render() {
    const list = [...this.props.list]
    return (
      <div className="list-group app-list-group mb-4">
        {/* <div className="list-group-heading">List</div> */}
        {/* <pre>{ JSON.stringify(list, '', 2) }</pre> */}
        { list.map((menu, i) => {
          const activeMenu = this.state.activeMenu.split('/');
          const isActive = (menu.path === activeMenu[0]);
          return (
            <React.Fragment key={"dashMenu"+i}>
              <div onClick={() => this.onSelect(menu.path)}
                className={"list-group-item list-group-item-action " + (isActive ? ' selected' : '') }>
                {/* <i className="fa fa-search"></i> */}
                <span>{menu.name}</span>
              </div>
              { isActive && ('children' in menu && menu.children.length > 0) ? (
                <div className="list-group-child">
                  { menu.children.map((subMenu, ci) => {
                    const isActiveChild = (subMenu.path === activeMenu[1])
                    return (
                      <div key={"dashMenu"+i+'child'+ci} 
                        className={"list-group-item" + (isActiveChild ? ' selected' : '')}
                        onClick={() => this.onSelect(menu.path+'/'+subMenu.path)}
                      >{subMenu.name}</div>);
                  }) }
                </div>
              ) : null}
            </React.Fragment>
          )
        }) }
      </div>
    )
  }
}

ListGroup.defaultProps = {
  change: () => null,
  initialKey: '',
}