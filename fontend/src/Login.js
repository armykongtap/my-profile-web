import React from "react";
import { Button, Form, Card } from "react-bootstrap";
import "./login-regis.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { postData: { username: "", password: "" }, message: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    let tempData = this.state.postData;
    tempData[e.target.name] = e.target.value;
    this.setState({
      postData: tempData,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/auth/token/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.postData),
    });
    if (!res.ok) {
      this.setState({
        postData: { username: "", password: "" },
        message: "Username or Password is incorrect",
      });
    } else {
      res.json().then((data) => {
        localStorage.setItem("token", data.auth_token);
      });
      window.location.href = "/profile";
    }
  };

  render() {
    return (
      <div className="login">
        <Card>
          <Card.Header>Login</Card.Header>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  name="username"
                  value={this.state.postData.username}
                  type="text"
                  placeholder="Username"
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.postData.password}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              {/* <Form.Group>
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group> */}
              <div id="red">{this.state.message}</div>
              <Button variant="primary" type="submit" block>
                Login
              </Button>
              <Form.Text className="text-muted">
                Don't have an account? <a href="/register">Create an account</a>
              </Form.Text>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Login;
