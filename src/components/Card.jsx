import React from 'react';
import 'bulma/css/bulma.css';

const Card = ({ header, image, title, description, stats }) => (
  <div className="card">
    <div className="card-header">
      <p className="card-header-title is-centered">{header}</p>
    </div>
    <div className="card-image"><img src={image} alt=""/></div>
    <div className="card-content is-centered">
      <p className="title is-centered">{title}</p>
      <p className="is-2"><i>{description}</i></p>
      <div className="card-footer is-centered">
        {
          stats.map(stat => <div key={stat}><b>{stat}</b></div>)
        }
      </div>
    </div>
  </div>
)

export default Card;