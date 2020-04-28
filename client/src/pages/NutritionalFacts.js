import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import NutritionFacts from "../components/NutritionFacts";

class Nutrition extends Component {
    state = {

    };

    render () {

        return (
            <div className="jumboMain">
                
                <Jumbotron>

                    <NutritionFacts />

                </Jumbotron>

            </div>
        )

    };
}

export default Nutrition;