import React,{ useEffect }  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import CreateSurvey from './components/pages/CreateSurvey';
import NotFound from './components/pages/NotFound';
import EmployeeState from './context/employee/EmployeeState'
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
          <Router>
            <div className='App'>
              <NavBar />
              <div className='container'>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/createsurvey' component={CreateSurvey} />
                  <Route component={NotFound} />
                </Switch>
              </div>
              <Footer/>
            </div>
          </Router>
      </EmployeeState>
    );
}

export default App;
