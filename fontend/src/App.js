import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import NavBar from "./NavBar";
import Profile from "./Profile";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route path="/login" component={() => <Login />} />
          <Route path="/register" component={() => <Register />} />
          <Route
            path="/profile/:profileUserId"
            component={() => <Profile params={useParams()} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
