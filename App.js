import React from 'react';
import NavigationBar from './components/NavigationBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards';
import baruch from './components/Carousels-images/baruch1.jpg';
import Login from './components/Login';

function App() { 
  return (
    
    <div className="App">
      <header className="App-header">
        
        {/*Navigation Bar*/}
        <NavigationBar/>
        <div className="App-body">
        <span className="textOverImage" data-text=" Welcome To Baruch">
        <Cards/>
          </span>
          
        </div>
        
      </header>
    </div>
    
  );
}
export default App;
