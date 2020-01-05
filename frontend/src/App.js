import React from 'react';
import './App.css';

import logo from './img/logo.svg';

import Routes from './routes';

function App() {
  return (
    <div className = "container">
      <img src = {logo} alt = "AirCNC" />

      <div className = "content">
        <Routes />
      </div>
    </div>
  );
}
export default App;
