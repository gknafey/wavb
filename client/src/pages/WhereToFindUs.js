import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import WhereToFind from "../components/WhereToFind";

class WhereToFindUs extends Component {
    state = {

    };

    render () {
        return (

            <div className="jumboMain">
                <header className="tags">Where You Can Find Will's Amazing Vegan Burgers</header>
                <Jumbotron>

                    <WhereToFind />

                </Jumbotron>

            </div>

        )
    }
}

export default WhereToFindUs;