import React from 'react';
import liveOak from './live-oak-hef.png';
import './App.css';

import BeerStats from './components/BeerStats';

function App() {
  return (
    <div id="wrapper">
      <section id="main">
        <header>
          <h1>11th Floor Kegerator</h1>
          <h3>The beer currently on tap is</h3>
          <span className="avatar"><img src={liveOak} alt="" style={{ height: '175px' }}/></span>
          <p><i>"Authentically brewed using a traditional yeast strain that naturally creates the signature flavors of vanilla, clove, and banana."</i></p>
        </header>
        <BeerStats>
          <span className="stat"><b>OG: 13&#176;P</b></span>
          <span className="stat"><b>ABV: 5.3%</b></span>
          <span className="stat"><b>IBU: 10</b></span>
        </BeerStats>
      </section>
    </div>
  );
}

export default App;
