import React from 'react';
import "./App.css";
import axios from "axios";
import cheerio from 'cheerio';
import {
    BrowserRouter as Router,
        Switch,
        Route
} from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import {Container} from "react-bootstrap";



function App() {

  return (
      <>
      <Router>
              <Navigation />
              <Switch>
                  <Route path="/" exact>
                      Logo
                      <br/>
                      <Home />
                  </Route>
                  <Route path="/about"/>
              </Switch>
      </Router>
      </>
  );
}

export default App;
