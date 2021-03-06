import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
// import Tables from "./pages/Tables";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Stripe from "./pages/Stripe";
import "./App.css";
import Topnav from "./components/navbar";
import Products from "./pages/Products";
// !user sees these routes
class App extends Component {
  // cant pass
  state = {
    user: {
      firstName: "",
      lastName: "",
      email: ""
    },
    cart: []
  };

  isAuthenticated = objectFromLoginPage => {
    this.setState({ user: objectFromLoginPage });
  };

  addToCart = product => {
    this.setState({ cart: product });
  };

  render() {
    return (
      <Router>
        <div>
          <Topnav userData={this.state.user} />
          <Switch>
            <Route exact path="/" render={props => <Home {...props} userData={this.state.user} />}/>
            <Route exact path="/login" render={props => (<Login {...props} handleAuth={this.isAuthenticated} />)}/>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/cart" render={props => <Stripe {...props} />} />
            <Route exact path="/products" render={props => (<Products {...props} addToCart={this.addToCart} />)}/>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
