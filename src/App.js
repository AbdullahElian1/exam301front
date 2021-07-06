import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Header from './Header';
import Home from './component/Home';
import Fav from './component/Fav';


export class App extends Component {
  render() {
    return (
      <div>

        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />

            </Route>
            <Route  path="/fav">
              <Fav />

            </Route>
            
            
          </Switch>
        </Router>

        
      </div>
    )
  }
}

export default App
