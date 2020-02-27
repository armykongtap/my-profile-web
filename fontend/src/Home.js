import React from "react";
import "./Home.css";
// import NavBar from "./NavBar";

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
      <div>
        <div className={"Home"}>Welcome to my website</div>
      </div>
    );
  }
}

export default Home;
