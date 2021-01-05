import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'
import {Home} from './components/Home'
import {Employee} from './components/Employee'
import {Department} from './components/Department'


import {Draft} from './components/Draft'
import {Supervisor} from './components/Supervisor'
import {Coordinator} from './components/Coordinator'
import {Mechanical} from './components/Mechanical'
import {Navigation} from './components/Navigation'

import {BrowserRouter,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="container">

      <h3 className="m-3 d-flex justify-content-center"> React JS with Web api Demo</h3>
      <h3 className="m-3 d-flex justify-content-center"> Employee Management Portal</h3>
      <Navigation/>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/department' component={Department} />
        <Route path='/draft' component={Draft} />
        <Route path='/employee' component={Employee} />
        <Route path='/Supervisor' component={Supervisor} />
        <Route path='/Coordinator' component={Coordinator} />
        <Route path='/Mechanical' component={Mechanical} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
