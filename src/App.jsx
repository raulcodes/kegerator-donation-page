import React from 'react';

import BaseStyles from './styled_components/Base.styled';
import Wrapper from './styled_components/Wrapper.styled';
import Card from './components/Card';

function App() {
  return (
    <>
    <BaseStyles />
    <Wrapper>
      <h1>11th Floor Kegerator</h1>
      <h3>Currently On Tap:</h3>
      <Card />
    </Wrapper>
    </>
  );
}

export default App;
