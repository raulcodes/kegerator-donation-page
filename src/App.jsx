import React from 'react';

import BaseStyles from './styled_components/Base.styled';
import Wrapper from './styled_components/Wrapper.styled';
import Card from './components/Card';

function App() {
  return (
    <>
    <BaseStyles />
    <Wrapper>
      <Card />
    </Wrapper>
    </>
  );
}

export default App;
