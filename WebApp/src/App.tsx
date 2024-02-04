import React from 'react';
import Header from './components/header/Header';
import GlobalState from './context/GlobalState';
import Section from './components/middle/section';

function App() {
  return (
    <GlobalState>
      <div className='h-screen'><Header/><Section/></div>
    </GlobalState>
  );
}

export default App;
