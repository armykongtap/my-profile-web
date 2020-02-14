import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserID: "GUEST"
    };
  }

  callbackFunction = childData => {
    this.setState({ currentUserID: childData });
  };

  render() {
    let isGUEST = this.state.currentUserID === "GUEST";
    return (
      <div>
        <NavBar />
        <Router>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login parentCallback={this.callbackFunction} />
            </Route>
            <Route path="/logout">
              <Logout parentCallback={this.callbackFunction} />
            </Route>
            <Route path="/">
              <Home currentUserID={this.state.currentUserID} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
