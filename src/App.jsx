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
    <div className="columns">
      <div className="column">
        <img src={flavorCountry}/>
      </div>
      <div className="column">
        <img src={zoe}/>
      </div>
      <div className="column">
        <img src={elecFish}/>
      </div>
      <div className="column">
        <img src={liveOakHef} />
      </div>
    </div>
  </div>
);

export default App;
