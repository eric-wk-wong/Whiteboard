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
import Edit_AccInfo from './components/NavBar/Edit_AccInfo';
import P_homepgae from './components/Professor/P_homepage';
import P_login from './components/firebase/P_login';
import Courses from './components/page/coursepage';
import HelpDesk from './components/Features/helpdesk';
import CIS4160_grading from './components/page/cis4160_grading';
import P_Blogging from './components/Professor/P_blogging';
import CIS4160_course from './components/courses/CIS4160';
import GradingPage from './components/page/GradingPage';
import ProfInfo from './components/Professor/P_Info';
import StudentPage from './components/Features/StudentPage'

class App extends Component {
  render(){
  return (
    <Router>

    <div className="App">
      <header>
      <AuthProvider>
        <Switch>
        <PrivateRoute exact path='/' component={Homepage} />
        <Route path='/login' component={Login} />
        <Route path='/P_login' component={P_login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/Schedule' component={Schedules} />
        <Route path='/P_homepage' component={P_homepgae} />
        <Route path='/AccInfo' component={AccInfo} />
        <Route path='/Blogging' component={Blogging} />
        <Route path='/P_Blogging' component={P_Blogging} />
        <Route path='/Add_Course' component={Add_Course} />
        <Route path='/Edit_AccInfo' component={Edit_AccInfo}/>
        <Route path='/HelpDesk' component={HelpDesk}/>
        <Route path='/coursepage' component={Courses}/>
        <Route path='/CIS4160_grading' component={CIS4160_grading}/>
        <Route path='/GradingPage' component={GradingPage}/>
        <Route path='/ProfInfo' component={ProfInfo}/>
        <Route path='/StudentPage' component={StudentPage}/>
        </Switch>

        </AuthProvider>
      </header>
      <div className="footer">
      <footer>Powered By Team Smurfs | Created By Team Smurfs</footer>
      <footer>Version 2.1.0 | April.28.2020</footer>
      </div>
    </div>
    </Router>

  );
}
}
export default App;
