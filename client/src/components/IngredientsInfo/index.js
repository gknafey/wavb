import React from "react";
import { Col, Row, Container } from "../Grid";
// import Burger from "../../images/BurgerNice.JPG";
import "./style.css";

function IngredientsInfo() {
    return (
        <div>
            <Container fluid>
            <div className="window">
            <p id="sectionOne" className="aboutUsTitle">Ingredients Information</p>
            <br></br>
                <Row >
                    <Col size="md-2">
                    </Col>
                    <Col size="md-8">
                        <p className="ingredientsListTitle">List of Our Ingredients</p>
                        <p className="ingredientsListTitle2">Organic Ingredients:</p>
                        <p className="ingredientsInfo">
                               
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Kale, yukon potatoes, carrots, onions, zucchini, mixed peppers, 
                                garlic, ginger, cornmeal, brown rice, coconut flour, coconut milk, 
                                apple cider vinegar, lemon, herbs, hemp seeds, evoo.

                        </p>
                        <p className="ingredientsListTitle2">Non-GMO's:</p>
                        <p className="ingredientsInfo">
                               
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Oats, black beans, chickpeas, chickpea flour, flax seeds, 
                                cranberries, distilled water.
                        </p>
                    </Col>
                </Row>
                
            </div>

        </Container>
        </div>
    )
}

export default IngredientsInfo;