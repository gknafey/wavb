import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import HowToCook from "../components/HowToCook";

class Cooking extends Component {
    state = {

    };

    render () {
        return (
            <div className="jumboMain"> 
            
                <Jumbotron>

                    <HowToCook />

                </Jumbotron>

            </div>
        );
    }
}

export default Cooking;