import React from "react";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserID: this.props.currentUserID
    };
  }

  callbackFunction = childData => {
    this.setState({ deckID: childData });
  };

  render() {
    return <div className={"Home"}>Welcome to my website</div>;
  }
}

export default Home;
