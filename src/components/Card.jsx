import React from 'react';
import 'bulma/css/bulma.css';

import Stat from '../styled_components/Stat.styled';

const Card = ({ header, image, title, description, stats }) => (
  <div className="card">
    <div className="card-header">
      <p className="card-header-title is-centered">{header}</p>
    </div>
    <div className="card-image"><img src={image} alt=""/></div>
    <div className="card-content is-centered">
      <p className="title is-centered">{title}</p>
      <p className="is-2"><i>{description}</i></p>
      <div className="card-footer">
        {
          stats.map(stat => <Stat key={stat}><b>{stat}</b></Stat>)
        }
      </div>
    </div>
  </div>
)

export default Card;