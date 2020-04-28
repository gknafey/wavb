import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
