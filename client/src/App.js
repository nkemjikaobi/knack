import React,{ useEffect }  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
// import User from './components/users/User';
import Alert from  './components/layout/Alert';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import EmployeeState from './context/employee/EmployeeState'
import AlertState from './context/alert/AlertState'
import './App.css';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () =>  {
  useEffect( () => {
    //Initializes Materialize JS
    M.AutoInit();
  })

    return (
      <EmployeeState>
        <AlertState>
          <Router>
            <div className='App'>
              <NavBar />
              <div className='container'>
                <Alert/>
                <Switch>
                  <Route exact path='/' component={Home} />
                  {/* <Route exact path='/user/:login' component={User} /> */}
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </Router>
        </AlertState>
      </EmployeeState>
    );
}

export default App;
