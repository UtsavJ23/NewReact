import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, url} = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://images.livemint.com/img/2022/08/18/600x338/windfall_tax_1660842784259_1660842784427_1660842784427.JPG"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} target="blank" className="btn btn-dark">
              Read more...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem