import React from "react";
import { Col, Row, Container } from "../Grid";
import Burger from "../../images/BurgerNice.JPG";
import "./style.css";

function Main() {
    return (

        <Container fluid>
            <div className="window">
                
                <Row >
                    <Col size="md-6">

                        <img className="mainBurger" alt="Burger Img Here" src={Burger}></img>

                    </Col>
                    <Col size="md-6">
                        <p className="mainTitle">What we are all about</p>
                        <p className="mainInfo">

                                Hi my name is Will Pough.  I make all Natural Vegan burgers with vast amounts of benefits and hold 
                            my burgers to high standards.  They are made with ingredients that you can pronounce and identify. You 
                            will find my burgers have an absence of food coloring, GMO's, or speaking plainly, they have NO Artificial
                             Anything...! What they do have are quality ingredients which hinges all the amazing aspects into the name 
                            "Will's Amazing Vegan Burgers". 
                            
                        </p>
                    </Col>
                </Row>
            </div>

        </Container>

    )
}

export default Main;
