import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Homepage from './components/Features/Homepage';
import AccInfo from './components/NavBar/AccInfo';
import Schedules from './components/Features/Schedule';
import { AuthProvider } from './components/firebase/Auth';
import PrivateRoute from './components/firebase/PrivateRoute';
import Login from './components/firebase/Login';
import SignUp from './components/firebase/SignUp';
import Blogging from './components/Blog/Blogging';
import Add_Course from './components/NavBar/Add_Course';
import Edit_AccInfo from './components/NavBar/Edit_AccInfo'



class App extends Component {
  render(){
  return (
    <Router>
      
    <div className="App"> 
      <header className="App-header">
      <AuthProvider>
        <Switch>
        <PrivateRoute exact path='/' component={Homepage} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/Schedule' component={Schedules} />
        <Route path='/AccInfo' component={AccInfo} />
        <Route path='/Blogging' component={Blogging} />
        <Route path='/Add_Course' component={Add_Course} />
        <Route path='/Edit_AccInfo' component={Edit_AccInfo}/>
        </Switch>
        
        </AuthProvider>
      </header>
      <div className="footer">
      <footer>Powered By Team Smurfs | Created By Team Smurfs</footer>
      <footer>Version 2.0.2 | Apr.3.2020</footer>
      </div>
    </div>
    </Router>
    
  );
}
}
export default App;
