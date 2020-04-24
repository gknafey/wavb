import React, { Component } from "react";
import Main from "../components/MainInfo";
import Main2Info from "../components/Main2Info";
import Jumbotron from "../components/Jumbotron";



class Homepage extends Component {
  state = {

  };

  render() {

    return (
      <div>
        <div className="jumboMain">
          <Jumbotron>

            <Main />

          </Jumbotron>
        </div>
        <Main2Info />
      </div>
    );
  }
}

export default Homepage;