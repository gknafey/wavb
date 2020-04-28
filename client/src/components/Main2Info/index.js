import React from "react";
import { Col, Row, Container } from "../Grid";
import { HashLink as Link } from "react-router-hash-link";
import PoachedEggB1 from "../../images/PoachedEggPlateB.JPG";
import PoppersB2 from "../../images/PoppersPlateB.JPG";
import SliderB3 from "../../images/SliderPlateB.JPG";
import ThaiB4 from "../../images/ThaiPlateB.JPG";

import "./style.css";

function Main2info() {
    return (
        <div className="window2">
            <div className="window3">
                <div className="window4">
                    <div className="window5">

                        <div className="clickImagesBelowSection">
                            <Container fluid>
                                <div className="windowClickBelow">
                                    <p className="clickImagesBelow"> Click the Images Below to View these Amazing Recipes </p>
                                    
                                    <div className="divider0-2"></div>
                                </div>

                            </Container>
                        </div>

                        <Container fluid>
                            <div className="window6">
                                <Row className="justify-content-center">
                                    <Col size="md-6 burgerAdjust">

                                        <Link to="/CookingInstructions#poachedEggPlate"> <img className="quadrantBurgers poached" alt="Burger Img Here" src={PoachedEggB1}></img> </Link>

                                    </Col>
                                    <Col size="md-6 burgerAdjust">
                                        
                                        <Link to="/CookingInstructions#poppersPlate"> <img className="quadrantBurgers poppers" alt="Burger Img Here" src={PoppersB2}></img> </Link> 
                                    
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size="md-6">

                                    <Link to="/CookingInstructions#sliderPlate"> <img className="quadrantBurgers slider" alt="Burger Img Here" src={SliderB3}></img> </Link>
                                        

                                    </Col>
                                    <Col size="md-6">
                                    <Link to="/CookingInstructions#thaiPlate"> <img className="quadrantBurgers thai" alt="Burger Img Here" src={ThaiB4}></img> </Link>
                                        
                                    </Col>

                                </Row>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main2info;