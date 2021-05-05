import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/">
              Kezdőlap
            </NavLink>

            <NavLink className="d-inline p-2 bg-dark text-white" to="/home">
              Szerkesztés
            </NavLink>

            <NavLink
              className="d-inline p-2 bg-dark text-white"
              to="/department"
            >
              Részleg
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/employee">
              Alkalmazott
            </NavLink>

            <NavLink className="d-inline p-2 bg-dark text-white" to="/draft">
              Draft
            </NavLink>
            <NavLink
              className="d-inline p-2 bg-dark text-white"
              to="/Supervisor"
            >
              Supervisor jóváhagyás
            </NavLink>
            <NavLink
              className="d-inline p-2 bg-dark text-white"
              to="/Coordinator"
            >
              Koordinátor jóváhagyás{" "}
            </NavLink>
            <NavLink
              className="d-inline p-2 bg-dark text-white"
              to="/Mechanical"
            >
              Szerelő jóváhagyás
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
