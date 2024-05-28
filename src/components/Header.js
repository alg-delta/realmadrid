import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  const { count } = props;
  return (
    <div>
      <Navbar bg="secondary" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src="real.png" width="50" className="rm" />
            <h4>Real Madrid</h4>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              <h5>Опис клубу</h5>
            </NavLink>
            <NavLink to="/gimn" className="nav-link">
              <h5>Гімн клубу</h5>
            </NavLink>
            <NavLink to="/best" className="nav-link">
              <h5>Кращі гравці</h5>
            </NavLink>
            <NavLink to="/trophy" className="nav-link">
              <h5>Трофеї</h5>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
