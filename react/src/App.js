import React from 'react';
import './App.css';
import HomepageImage from './components/HomepageImage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Smurfs</h1>
        <HomepageImage />
        <p>
          ...with plans.
        </p>
      </header>
    </div>
  );
}

export default App;
