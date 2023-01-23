import React from 'react';

import Header from './Components/Header/Header'
import Greeting from './Components/Greeting/Greeting'
import Menu from './Components/Menu/Menu'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Greeting />
      <Menu />
    </React.Fragment>
  );
}

export default App;
