import React from 'react';
import liveOak from './live-oak-hef.png';
import './App.css';

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
      </section>
    </div>
  );
}

export default App;
