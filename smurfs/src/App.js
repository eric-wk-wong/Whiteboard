import React from 'react';
import HomepageImage from './components/HomepageImage';
import NavigationBar from './components/NavigationBar';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() { 
  return (
    <div className="App">
      <header className="App-header">
        {/*Navigation Bar*/}
        <NavigationBar />
        <div className="App-body">
          <h1>Smurfs</h1>
          <HomepageImage /> {/*example of a react component - which we should try and use*/}
          <h5>
            ...with plans
          </h5>
        </div>
      </header>
    </div>
  );
}

export default App;
