import React from "react";
import { Col, Row, Container } from "../Grid";
import NutritionImage from "../../images/NutritionFacts.JPG";
import "./style.css";

function NutritionFacts() {
    return (
        <div>
            <Container fluid>
            <div className="window">
            <p id="sectionOne" className="nutritionFactsTitle">Nutritional Information</p>
            <br></br>
                <Row >
                    <Col size="md-4">

                        <img className="AboutUsFoto" alt="Burger Img Here" src={NutritionImage}></img>

                    </Col>
                    <Col size="md-7">
                        
                        <p className="aboutUsInfo">
                                <pre></pre>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Some nutritional facts concerning my burgers would be that they have 
                                 No Gluten, No Soy, only Natural preservatives, they're Anti-inflammatory
                                  and probiotic.  It is 3oz. at 120 calories, 4 grams of total fat, Zero 
                                  Cholesterol, 4 grams of protein, low in sodium.  It is simply PLANTS, 
                                  SALT, AND WATER. No gimmicks or junk, it is just plants done right.  I 
                                  proud to have a product that is junk free.  A burger with simple elements, 
                                  packed with good stuff that can accompany any meal quickly.  Whether you 
                                  are a vegan or vegetarian or someone who just wants to eat healthy, this 
                                  burger will make cooking on busy days a breeze.
                            
                        </p>
                    </Col>
                </Row>
            </div>

        </Container>

        </div>
    )
}

export default NutritionFacts;