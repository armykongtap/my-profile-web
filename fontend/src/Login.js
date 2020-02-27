import React from "react";
import { Button, Form } from "react-bootstrap";
import "./login-regis.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="form">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Button variant="primary" type="Login">
            Submit
          </Button>
          <Form.Text className="text-muted">
            Don't have an account? <a href="/register">Create an account</a>
          </Form.Text>
        </Form>
      </div>
    );
  }
}

export default Login;
