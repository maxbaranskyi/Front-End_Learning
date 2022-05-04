import React from 'react';
import './App.scss';
import RoutesTree from './ui/boot/router';
import Header from './ui/components/Header';

function App() {
  return (
    <div className="App">
      <div className='placeForHeader'></div>
      <Header />
      <RoutesTree />
    </div>
  );
}

export default App;
