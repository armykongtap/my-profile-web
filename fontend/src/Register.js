import React from "react";
import { Button, Form, Card, InputGroup, Row, Col } from "react-bootstrap";
import "./login-regis.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postData1: { username: "", password: "" },
      postData2: { userId: 0, firstName: "", lastName: "" },
      message: ""
    };
    this.handleChange1.bind(this);
    this.handleChange2.bind(this);
    this.handleSubmit.bind(this);
  }

  handleChange1 = e => {
    let tempData = this.state.postData1;
    tempData[e.target.name] = e.target.value;
    this.setState({
      postData1: tempData
    });
  };

  handleChange2 = e => {
    let tempData = this.state.postData2;
    tempData[e.target.name] = e.target.value;
    this.setState({
      postData2: tempData
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:8000/auth/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.postData1)
    })
      .then(res => {
        this.setState({ isFetch1ok: res.ok });
        return res.json();
      })
      .then(data => {
        this.setState({ data1: data });
      });

    console.log(this.state);

    // .then(res => {
    //   if (res.ok) {
    //     fetch("http://localhost:8000/users/", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(this.state.postData)
    //     }).then(res2 => {
    //       if (res2.ok) {
    //         this.setState({
    //           message: "Account was created"
    //         });
    //         console.log(this.state);
    //         setTimeout(() => {
    //           window.location.href = "/";
    //         }, 1000);
    //       }
    //     });
    //     return [["Please try again later"]];
    //   }
    //   return res.json();
    // })
    // .then(data => {
    //   this.setState({
    //     postData: {
    //       firstName: "",
    //       lastName: "",
    //       password: "",
    //       username: ""
    //     },
    //     message: Object.values(data)[0][0]
    //   });
    // });
  }

  render() {
    return (
      <div className="regis">
        <Card>
          <Card.Header>Register</Card.Header>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Label>Name</Form.Label>
              <Form.Row>
                <Col>
                  <Form.Group>
                    <Form.Control
                      name="firstName"
                      value={this.state.postData2.firstName}
                      type="text"
                      placeholder="First Name"
                      onChange={this.handleChange2}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Control
                      name="lastName"
                      value={this.state.postData2.lastName}
                      type="text"
                      placeholder="Last Name"
                      onChange={this.handleChange2}
                      required
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  name="username"
                  value={this.state.postData1.username}
                  type="text"
                  placeholder="Username"
                  onChange={this.handleChange1}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  value={this.state.postData1.password}
                  type="password"
                  placeholder="New Password"
                  onChange={this.handleChange1}
                  required
                />
              </Form.Group>
              {/* <Form.Group>
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                  name="rePassword"
                  type="password"
                  placeholder="Confirm password"
                />
              </Form.Group> */}
              {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group> */}
              <div id="red">{this.state.message}</div>
              <Button variant="primary" type="submit" block>
                Register
              </Button>
              <Form.Text className="text-muted">
                Already have an account? <a href="/login">Login</a>
              </Form.Text>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Register;
