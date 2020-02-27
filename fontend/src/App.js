import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import { Button } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      // <Router>
      //   <div>
      //     <nav>
      //       <ul>
      //         <li>
      //           <Link to="/">Home</Link>
      //         </li>
      //         <li>
      //           <Link to="/login">login</Link>
      //         </li>
      //         <li>
      //           <Link to="/register">register</Link>
      //         </li>
      //       </ul>
      //     </nav>

      //     {/* A <Switch> looks through its children <Route>s and
      //       renders the first one that matches the current URL. */}
      //     <Switch>
      //       <Route path="/login">
      //         <Login />
      //       </Route>
      //       <Route path="/register">
      //         <Register />
      //       </Route>
      //       <Route path="/">
      //         <Home />
      //       </Route>
      //     </Switch>
      //   </div>
      // </Router>
      <div>
        <Button variant="primary">Primary</Button>
      </div>
    );
  }
}

export default App;
