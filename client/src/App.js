import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Cooking from "./pages/Cooking";
import Nutrition from './pages/NutritionalFacts';
import Ingredients from './pages/Ingredients';
import WhereToFindUs from './pages/WhereToFindUs';

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/AboutUs" component={AboutUs} />
        <Route exact path="/CookingInstructions" component={Cooking} />
        <Route exact path="/NutritionalFacts" component={Nutrition} />
        <Route exact path="/Ingredients" component={Ingredients} />
        <Route exact path="/WhereToFindUs" component={WhereToFindUs} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
