// src/components/Header.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="#home">IndigoLearn</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#courses">Courses</Nav.Link>
          <Nav.Link href="#books">Books</Nav.Link>
          <Nav.Link href="#programs">Programs</Nav.Link>
          <Nav.Link href="#resources">Free Resources</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
