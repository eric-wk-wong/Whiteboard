import React from 'react';
import HomepageImage from './components/HomepageImage'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Smurfs</h1>
        <HomepageImage />
        <p>
          ...with plans
        </p>
      </header>
    </div>
  );
}

export default App;
