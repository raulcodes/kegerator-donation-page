import React from 'react';

import BaseStyles from './styled_components/Base.styled';
import Wrapper from './styled_components/Wrapper.styled';
import Card from './components/Card';

import flavorCountry from './flavor-country.png';
import zoe from './zoe.png';


function App() {
  return (
    <>
    <BaseStyles />
    <Wrapper>
      <h1>11th Floor Kegerator</h1>
      <hr/>
      <h3>Currently On Tap:</h3>
      <div className="columns container" style={{ 'width': '70%' }}>
        <div className="column">
          <Card
            header="Tap 1"
            image={flavorCountry}
            title="ABW Flavor Country"
            description='"When we began in 2011 it was impossible to brew this Hoppy Pale Ale. The ingredients weren’t available and the science didn’t exist. Oil rich lupulin powder was just a dream. It brings intense flavor but doesn’t linger, drinks like a hop forward pale ale but doesn’t blow you up and every sip leaves you craving more. It’s so special we had to invent a whole new country to explain it. Welcome."'
            stats={[
            'ABV: 5.9%',
            'IBU: 35',
            ]}
          />
        </div>
        <div className="column">
          <Card
            header="Tap 2"
            image={zoe}
            title="H&G The One They Call Zoe"
            description='"Pale Lager - Zoe is brewed in a mildly traditional manner, very similar to many of the German lagers of the old world but dry-hopped to add an extra layer of complexity. This beer is based on pale and Vienna malts, light to golden in color with a beautiful white layer of foam resting on top, constantly delivering floral and citrus dry-hop aromatics with every sip. Zoe is meant to be paired with, well, life! With notes of lightly toasted bread, floral hops and an incredibly smooth finish we hope that Zoe is everything that you’ve been searching for in a pale lager."'
            stats={[
              'ABV: 5.1%',
              'IBU: 18',
              'SRM: 18',
            ]}
          />
        </div>
      </div>
    </Wrapper>
    </>
  );
}

export default App;
