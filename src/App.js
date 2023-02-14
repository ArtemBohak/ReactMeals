import React from 'react';

import Header from './Components/Header/Header'
import Greeting from './Components/Greeting/Greeting'
import Menu from './Components/Menu/Menu'

import GlobalContextProvider from './Components/Contexts/GlobalContext';



function App() {
  return (

    <GlobalContextProvider>
      <Header />
      <Greeting />
      <Menu />
    </GlobalContextProvider>
  );
}

export default App;
