import React from 'react';

import liveOak from '../live-oak-hef.png';

import StyledCard from '../styled_components/Card.styled';
import Avatar from '../styled_components/Avatar.styled';
import Description from '../styled_components/Description.styled';
import BeerStats from '../styled_components/BeerStats.styled';
import Stat from '../styled_components/Stat.styled';
import BlankCard from '../styled_components/BlankCard.styled';

const Taps = () => (
  <>
    <StyledCard>
      <div>
        <h2>Live Oak Hefeweizen</h2>
        <Description><i>"Authentically brewed using a traditional yeast strain that naturally creates the signature flavors of vanilla, clove, and banana."</i></Description>
        <BeerStats>
          <Stat><b>OG: 13&#176;P</b></Stat>
          <Stat><b>ABV: 5.3%</b></Stat>
          <Stat><b>IBU: 10</b></Stat>
        </BeerStats>
      </div>
      <Avatar><img src={liveOak} alt="" style={{ height: '7rem' }}/></Avatar>
    </StyledCard>
    <BlankCard>
      <h3><i>Tap 2 coming soon...</i></h3>
    </BlankCard>
  </>
)

export default Taps;