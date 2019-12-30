import React from 'react';
import 'bulma/css/bulma.css';

const Card = ({ image }) => (
  <div className="card">
    <div className="card-image"><img src={image} alt=""/></div>
  </div>
)

export default Card;