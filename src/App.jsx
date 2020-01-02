import React from 'react';

import styles from './App.module.scss';
import 'bulma/css/bulma.css';

import beerData from './beer-data';

const App = () => (
  <div className={styles.wrapper}>
    <h1>11th Floor Kegerator</h1>
    <hr/>
    <div className="columns is-multiline is-centered">
      {
        beerData.map(beer => (
          <div className="column is-one-third">
            <img src={beer.imagePath} alt={beer.name} style={{ 'maxWidth': '300px' }} />
          </div>
        ))
      }
    </div>
  </div>
);

export default App;
