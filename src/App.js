import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store.js";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from './pages/Home';
import Image from './pages/Image';
import Albums from './pages/Albums';
import Album from './pages/Album';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/albums" component={Albums} />
            <Route exact path="/image/:id" component={Image} />
            <Route exact path="/album/:id" component={Album} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
