import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Table from "../images/Edited_Table_Purple_in_progress.png";

class Homepage extends Component {
    state = {
  
    };

    render() {

        return (
          <div>
            
            <Jumbotron >
            {/* <img className="table-resize" alt="Logo Here" src={Table}></img> */}
              <h1>Content Here</h1>
            </Jumbotron>
    
          </div>
        );
      }
    }
    
    export default Homepage;