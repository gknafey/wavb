import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import AboutUsInfo from "../components/AboutUsInfo";


class AboutUs extends Component {
    state = {

    };


    render() {
        return (
            <div className="jumboMain">
                <header className="tags">About Us Information</header>

                <Jumbotron>

                    <AboutUsInfo />

                </Jumbotron>

                
            </div>
        );
    }
}

export default AboutUs;
