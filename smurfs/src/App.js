import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Homepage from './components/Homepage';
import AccInfo from './components/AccInfo';
import Schedules from './components/Schedule';
import { AuthProvider } from './components/Auth';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import SignUp from './components/SignUp';
import myclass from './components/myclass';


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
        <Route path='/Homepage' component={Homepage} />
        <Route path='/Schedule' component={Schedules} />
        <Route path='/AccInfo' component={AccInfo} />
        <Route path='/myclass' component={myclass}/>
        </Switch>
        </AuthProvider>
      </header>
      <footer>Powered by team smurfs | Created by team smurfs</footer>
    </div>
    </Router>
    
  );
}
}
export default App;
