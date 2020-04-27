import React, { Component } from "react";
import Main from "../components/MainInfo";
import Main2Info from "../components/Main2Info";
import Jumbotron from "../components/Jumbotron";
import TitleMain2 from "../components/TitleMain2"



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
        <TitleMain2 />
        <Main2Info />
      </div>
    );
  }
}

export default Homepage;