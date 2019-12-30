import React from 'react';

import styles from './App.module.scss';
import 'bulma/css/bulma.css';

import flavorCountry from './beer_assets/flavor-country.png';
import zoe from './beer_assets/zoe.png';
import elecFish from './beer_assets/elec-fish.png';
import liveOakHef from './beer_assets/live-oak-hef.png';


const App = () => (
  <div className={styles.wrapper}>
    <h1>11th Floor Kegerator</h1>
    <hr/>
    <div className="columns is-multiline">
      <div className="column">
        <img src={flavorCountry} alt="Flavor Country" style={{ 'maxWidth': '300px' }} />
      </div>
      <div className="column">
        <img src={zoe} alt="Zoe" style={{ 'maxWidth': '300px' }} />
      </div>
      <div className="column">
        <img src={elecFish} alt="Electric Jellyfish" style={{ 'maxWidth': '300px' }} />
      </div>
      <div className="column">
        <img src={liveOakHef} alt="Live Oak Hef" style={{ 'maxWidth': '300px' }} />
      </div>
    </div>
  </div>
);

export default App;
