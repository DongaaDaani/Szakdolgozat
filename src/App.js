import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'
import {Home} from './components/Home'
import {Employee} from './components/Employee'
import {Department} from './components/Department'
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
        <Route path='/employee' component={Employee} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
