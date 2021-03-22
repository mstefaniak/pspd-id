import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Legitymacja
        </p>
        <a
          className="App-link"
          href="https://pspd.org.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Polskie Stowarzyszenie Piwowarów Domowych
        </a>
      </header>
    </div>
  );
}

export default App;
