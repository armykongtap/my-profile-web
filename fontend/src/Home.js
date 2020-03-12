import React from "react";
import "./Home.css";
import { Image, Container, Row, Col, Button, Card } from "react-bootstrap";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: 1 };
  }

  // callbackFunction = childData => {
  //   this.setState({ deckID: childData });
  // };

  render() {
    return (
      <div className="home">
        <div className="mid">
          <b id="font-size-40">MyProfile.com</b>
          <p id="font-size-20">
            helps you connect and share with the people in your life.
          </p>
          <Button variant="primary" size="lg" href="/register">
            Join Us
          </Button>
          <p id="font-size-15">
            or <a href="/login">Login</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
