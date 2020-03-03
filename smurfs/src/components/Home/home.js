import React from 'react';
import SideBar from './sidebar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from '../Cards';




function Home() { 
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        
        {/*Navigation Bar*/}
        <SideBar/>
        <div className="App-body">
        <span className="textOverImage" data-text="Welcome To Baruch">
          <div>
            <Cards/>
            </div>
          </span>
        </div>
      </header>
    </div>
    </Router>
  );
}
export default Home;
