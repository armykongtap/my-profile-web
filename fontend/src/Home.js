import React from "react";
import "./Home.css";
import { Image, Container, Row, Col, Button } from "react-bootstrap";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // callbackFunction = childData => {
  //   this.setState({ deckID: childData });
  // };

  render() {
    return (
      <div className="home">
        <div class="home1">
          <div>
            <b>
              MyProfile.com helps you connect and share with the people in your
              life.
            </b>
          </div>
          <Button variant="outline-warning" size="lg" href="/register">
            Join Us
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
