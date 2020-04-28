import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import AboutUsInfo from "../components/AboutUsInfo";


class AboutUs extends Component {
    state = {

    };


    render() {
        return (
            <div className="jumboMain">
                

                <Jumbotron>

                    <AboutUsInfo />

                </Jumbotron>

                
            </div>
        );
    }
}

export default AboutUs;
