import React from "react";
import { Button, Form } from "react-bootstrap";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", message: "" };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  // async handleSubmit(event) {
  //   let response;
  //   event.preventDefault();
  //   try {
  //     response = await fetch("http://localhost:8000/auth/register/", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
  //         username: this.state.username,
  //         password: this.state.password
  //       })
  //     });
  //     console.log(response.status);
  //     if (response.status === 201) {
  //       this.setState({ message: "Register Sucess" });
  //     } else {
  //       this.setState({ message: "Try again" });
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }

  //   try {
  //     let url =
  //       "http://localhost:8000/words/initialise/" + this.state.username + "/1/";
  //     fetch(url)
  //   } catch (err) {
  //     console.error(err);
  //   }

  //   this.setState({ username: "", password: "" });
  // }

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
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Re-enter password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group> */}
          <Button variant="primary" type="Login">
            Submit
          </Button>
          <Form.Text className="text-muted">
            Already have an account? <a href="/login">Login</a>
          </Form.Text>
        </Form>
      </div>
    );
  }
}

export default Register;
