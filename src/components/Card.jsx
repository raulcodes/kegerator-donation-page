import React from 'react';

import liveOak from '../live-oak-hef.png';

import StyledCard from '../styled_components/Card.styled';
import Avatar from '../styled_components/Avatar.styled';
import BeerStats from '../styled_components/BeerStats.styled';

const Card = () => (
  <StyledCard>
    <header>
      <h1>11th Floor Kegerator</h1>
      <h3>The beer currently on tap is</h3>
      <Avatar><img src={liveOak} alt="" style={{ height: '175px' }}/></Avatar>
      <p><i>"Authentically brewed using a traditional yeast strain that naturally creates the signature flavors of vanilla, clove, and banana."</i></p>
    </header>
    <BeerStats>
      <span className="stat"><b>OG: 13&#176;P</b></span>
      <span className="stat"><b>ABV: 5.3%</b></span>
      <span className="stat"><b>IBU: 10</b></span>
    </BeerStats>
  </StyledCard>
)

export default Card;