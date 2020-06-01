import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nie umiem w react. Umiem w Xamarin Android.
        </p>
        <p>
          Test akapitu.
        </p>
        <a
          className="App-link"
          href="pagetwo.tsx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Strona 2
        </a>
      </header>
    </div>
  );
}

export default App;
