import React from "react";
import "./NavBar.css";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar expand="lg" variant="dark">
        <Navbar.Brand href="/">MyProfile.com</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
