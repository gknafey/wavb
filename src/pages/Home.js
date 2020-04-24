import React, { Component } from "react";
import Main from "../components/MainInfo";
import Jumbotron from "../components/Jumbotron";



class Homepage extends Component {
    state = {
  
    };

    render() {

        return (
          <div className="jumboMain">
            
            <Jumbotron>
            
              <Main />


            </Jumbotron>
    
          </div>
        );
      }
    }
    
    export default Homepage;