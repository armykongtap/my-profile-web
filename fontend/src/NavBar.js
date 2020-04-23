import React from "react";
import "./NavBar.css";
import { Navbar, Nav } from "react-bootstrap";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout = async () => {
    await fetch("http://localhost:8000/auth/token/logout/", {
      method: "POST",
      headers: { Authorization: "Token " + sessionStorage.getItem("token") },
    });
    sessionStorage.clear();
    window.location.href = "/";
  };

  render() {
    return (
      <Navbar expand="lg" variant="dark">
        <Navbar.Brand href="/">MyProfile.com</Navbar.Brand>
        <Nav className="mr-auto"></Nav>

        {sessionStorage.getItem("token") ? (
          <Nav>
            <Nav.Link onClick={this.logout}>Logout</Nav.Link>
          </Nav>
        ) : (
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        )}
      </Navbar>
    );
  }
}

export default NavBar;
