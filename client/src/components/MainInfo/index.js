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

                        <img className="mainBurger" alt="https://i.imgur.com/CszQJx9.jpg" src={Burger}></img>

                    </Col>
                    <Col size="md-6">
                        <p className="mainTitle">Will's Amazing Vegan Burgers</p>
                        <p className="mainInfo">

                                Hi my name is Will Pough.  I make all Natural Vegan burgers which have vast amounts of health benefits. I hold 
                            my burgers to high standards and they are made with ingredients that you can pronounce and identify. You 
                            will find my burgers have an absence of food coloring and GMO's.  Speaking plainly, they have NO Artificial
                             Anything! What they do have are quality ingredients, which when brought together truly makes them 
                            "Will's Amazing Vegan Burgers". 
                            
                        </p>
                    </Col>
                </Row>
            </div>

        </Container>

    )
}

export default Main;
