import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import WhereToFind from "../components/WhereToFind";

class WhereToFindUs extends Component {
    state = {

    };

    render () {
        return (

            <div className="jumboMain">

                <Jumbotron>

                    <WhereToFind />

                </Jumbotron>

            </div>

        )
    }
}

export default WhereToFindUs;