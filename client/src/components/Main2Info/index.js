import React from "react";
import { Col, Row, Container } from "../Grid";
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
                        <Container fluid>
                            <div className="window6">
                            <Row className="justify-content-center">
                                <Col size="md-6 burgerAdjust">

                                    <img className="quadrantBurgers poached" alt="Burger Img Here" src={PoachedEggB1}></img>

                                </Col>
                                <Col size="md-6 burgerAdjust">
                                    <img className="quadrantBurgers poppers" alt="Burger Img Here" src={PoppersB2}></img>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="md-6">

                                    <img className="quadrantBurgers slider" alt="Burger Img Here" src={SliderB3}></img>

                                </Col>
                                <Col size="md-6">
                                    <img className="quadrantBurgers thai" alt="Burger Img Here" src={ThaiB4}></img>
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