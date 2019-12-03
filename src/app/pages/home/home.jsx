import React, { Component } from 'react';
import image from 'assets/images/bg.jpg'
import Filter from './filter';
import Rating from 'shared/components/rating/rating';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { }
  }
  
  componentDidMount() { }
  
  render() {
    return (
      <div className="container"  style={{paddingTop: '100px'}}>
        <div id="home">
          <div className="banner">
            <img src={image} alt=""/>
          </div>
          <div className="filter">
            <Filter />
          </div>
          <div className="product-items">
            <div id="searchBar" className="input-group mb-4">
              <input type="text" className="form-control mr-3" placeholder="Find Products ..."/>
              <button className="btn btn-primary"><i class="fa fa-search" aria-hidden="true"></i></button>
            </div>
            <div className="row">
              { Array(18).fill('').map((n,i) => (
                <div className="col-md-4">
                  <div className="card product-item">
                    <div className="product-image"><img src={`${process.env.PUBLIC_URL}/images/${(i%3) + 1}.jpg`} alt="liquor"/></div>
                    <div className="product-body">
                      <span className="product-title">{(['Bicardi Scotch Whiskey', 'Jack Daniels', 'Jose Cuervo'])[i%3]} {i === 2 && <i className="fas ml-1 fa-certificate"></i>}</span>
                      <span className="product-price">$ {500 + Math.floor(Math.random() * 500)}.00</span> 
                      <span><Rating value="3.5" /></span>
                      {/* <span className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Iusto, dolores nihil? Magni id corrupti aperiam consequuntur modi.</span> */}
                    </div>
                  </div>
                </div>
              )) }
            </div>
          </div>
        </div>
      </div>
     )
  }
}
