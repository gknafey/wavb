import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import IngredientsInfo from "../components/IngredientsInfo";

class Ingredients extends Component {
    state = {

    };

    render () {
        return (
            <div className="jumboMain">
                <header className="tags">Ingredients Information</header>
                <Jumbotron>

                    <IngredientsInfo />
                
                </Jumbotron>
            
            </div>
        )
    }
}

export default Ingredients;