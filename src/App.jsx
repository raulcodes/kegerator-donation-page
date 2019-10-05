import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BaseStyles from './styled_components/Base.styled';
import Wrapper from './styled_components/Wrapper.styled';
import Nav from './components/Nav';
import Taps from './components/Taps';
import Pints4Paws from './components/Pints4Paws';
import HallOfKegs from './components/HallOfKegs';

function App() {
  return (
    <Router>
      <BaseStyles />
      <Wrapper>
        <h1>11th Floor Kegerator</h1>
        <Nav/>
        <Switch>
          <Route path="/pints4paws">
            <Pints4Paws />
          </Route>
          <Route path="/hallofkegs">
            <HallOfKegs />
          </Route>
          <Route path="/">
            <h3>Currently On Tap:</h3>
            <Taps />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
