import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';

import {
  Home,
  About,
  Blog,
  Detail
} from './pages'

import './App.css'

class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
      <Redirect exact to="/home" from="" />
      <Route path="/home" component={Home}  />
      <Route exact path="/blog" component={Blog}  />
      <Route 
      exact path="/blog/post/:id" 
      component={Detail}  />
      <Route path="/about" component={About}  /> 
      </Switch>
    </Router>
    )
  }
}

export default App;
