import React, { Component } from 'react'

export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: this.generateStars(props.value),
    }
    
    
  }

  generateStars(rating = 0) {
    rating = Math.round(rating * 2) / 2;
    const stars = Array(5);
    for(let i = 0; i < 5; i++) {
      stars[i] = (rating - i) < 1 ? ((rating - i) <= 0 ? 'none' : 'half') : 'full'
    }
    return stars; 
  }

  renderStars(type, key) {
    const template = {
      'full' : "fas fa-star full",
      'half' : "fas fa-star-half",
      'none' : "fas fa-star none"
    }

    if (type === 'full' || type == 'none') {
      return (<span className="star" key={key}><i class={`fas fa-star ${type}`}></i></span>)
    } else {
      return (<span key={key} className="star half">
        <i class="fas fa-star-half"></i>
        <i class="fas fa-star none"></i>
      </span>)
    }
  }

  render() {
    const {stars} = this.state;
    return (
      <div className="rating-container">
        {stars.map((type, i) => this.renderStars(type, i) )} 
        <span className="rating-count">({Math.floor(Math.random() * 300)})</span>
      </div>
    )
  }
}
