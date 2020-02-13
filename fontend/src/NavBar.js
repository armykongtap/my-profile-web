import React from "react";
import "./NavBar.css";
import { Container, Col, Row, Button } from "react-bootstrap";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="NavBar">
        <Container>
          <Row>
            <Col>MyProfile.com</Col>
            <Row>
              <Col>
                <a href="/login">
                  <Button variant="primary">Login</Button>
                </a>
              </Col>
              <Col>
                <a href="/register">
                  <Button variant="secondary">Register</Button>
                </a>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
    );
  }
}
export default NavBar;
