import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header>
          <NavBar />
        </header>
        <Home />
      </div>
    );
  }
}
export default App;
