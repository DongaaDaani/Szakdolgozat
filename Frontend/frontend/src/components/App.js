import React from "react";
import logo from "../logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import { Home } from "./Home";
import { Employee } from "./Employee/Employee";
import { Department } from "./Department/Department";

import { Draft } from "./Business Process/Draft";
import { Supervisor } from "./Business Process/Supervisor";
import { Coordinator } from "./Business Process/Coordinator";
import { Mechanical } from "./Business Process/Mechanical";
import { Navigation } from "./Navigation";
import Signup from './Signup'
import {Container} from 'react-bootstrap'
//import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"



function App() {
  return (
   
   
      <Router>
        <AuthProvider>
     
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/Home" component={Home}  />
            <Route path="/department" component={Department} />
            <Route path="/draft" component={Draft} />
            <Route path="/employee" component={Employee} />
            <Route path="/Supervisor" component={Supervisor} />
            <Route path="/Coordinator" component={Coordinator} />
            <Route path="/Mechanical" component={Mechanical} />
              </Switch>
        </AuthProvider>
      </Router>


  );
}

export default App;
/*
  <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/department" component={Department} />
        <Route path="/draft" component={Draft} />
        <Route path="/employee" component={Employee} />
        <Route path="/Supervisor" component={Supervisor} />
        <Route path="/Coordinator" component={Coordinator} />
        <Route path="/Mechanical" component={Mechanical} />
      </Switch>
    </BrowserRouter>
    */
   