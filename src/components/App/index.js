import React from 'react';
import FlexibleCounter from '../FlexibleCounter';
import ExtraCounter from '../ExtraCounter';
import { Wrapper } from './styles';

function App() {
  return (
    <Wrapper>
      <FlexibleCounter />
      <ExtraCounter />
    </Wrapper>
  );
}

export default App;