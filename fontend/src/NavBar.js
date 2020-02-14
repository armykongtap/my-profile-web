import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUserID: "GUEST" };
  }
  render() {
    return (
      <div className="navbar-area">
        <ul className="navbar-container">
          <li className="left">
            <a href="/">MyProfile.com</a>
          </li>
          <li className="right">
            <a href="/login">Login</a>
          </li>
          <li className="right">
            <a href="/register">Register</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
