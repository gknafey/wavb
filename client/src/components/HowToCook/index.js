import React from "react";
import { Col, Row, Container } from "../Grid";
import { HashLink as Link } from "react-router-hash-link";
import PoachedEggB1 from "../../images/PoachedEggPlateB.JPG";
import PoppersB2 from "../../images/PoppersPlateB.JPG";
import SliderB3 from "../../images/SliderPlateB.JPG";
import ThaiB4 from "../../images/ThaiPlateB.JPG";
import "./style.css";

function HowToCook() {
    return (
        <div>
            <div className="howToCookQuick">
                <Container fluid>
                    <div className="window">
                        <p className="howToCookTitleQuick"> Cooking Quick Links: </p>
                        <span>
                            <Link to="/CookingInstructions#sautéingOptionA" className="nav-item left quickLinks"> Sautéing: Option A </Link>
                            <span className="quickDivider">|</span>
                            <Link to="/CookingInstructions#sautéingOptionB" className="nav-item left quickLinks"> Sautéing: Option B</Link> 
                            <span className="quickDivider">|</span>
                            <Link to="/CookingInstructions#grilling" className="nav-item left quickLinks"> Grilling </Link>
                            <span className="quickDivider">|</span>
                            <Link to="/CookingInstructions#boiling" className="nav-item left quickLinks"> Boiling </Link>
                            <span className="quickDivider">|</span>
                            <Link to="/CookingInstructions#baking" className="nav-item left quickLinks"> Baking </Link>
                            <span className="quickDivider">|</span>
                            <Link to="/CookingInstructions#microwaving" className="nav-item left quickLinks"> Microwave </Link>
                        </span>
                        <div className="divider0-2"></div>
                        
                    </div>

                    <div className="windowQuickRecipes">
                        <p className="howToCookTitleQuick"> Cooking Suggestions Quick Links: </p>
                        <span>
                            <Link to="/CookingInstructions#poachedEggPlate" className="nav-item left quickLinks"> Poached Egg Plate </Link>
                            <span className="quickDivider">|</span>
                            <Link to="/CookingInstructions#poppersPlate" className="nav-item left quickLinks"> Poppers Plate</Link> 
                            <span className="quickDivider">|</span>
                            <Link to="/CookingInstructions#sliderPlate" className="nav-item left quickLinks"> Sliders Plate </Link>
                            <span className="quickDivider">|</span>
                            <Link to="/CookingInstructions#thaiPlate" className="nav-item left quickLinks"> Thai Plate </Link>
                    
                        </span>
                        <div className="divider0-2"></div>
                        
                    </div>

                    

                </Container>
            </div>
            <Container fluid>
                <div className="window">
                    <p id="sectionOne" className="aboutUsTitle">Cooking Instructions</p>
                    <p id="sautéingOptionA" className="cookingInstructionsWarning">( Cook Frozen Do Not Defrost )</p>
                    <br></br>
                    <Row >
                        <Col size="md-4">

                            <img className="AboutUsFoto" alt="Burger Img Here" src="https://i.imgur.com/4im7bh0.jpg"></img>

                        </Col>
                        <Col size="md-7">
                            <p className="aboutUsTitle2">Sautéing: Option A</p>
                            <p className="aboutUsInfo">
                                <br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Sauté on medium to low heat using a non-stick pan, add 3/4 tablespoon
                                 of oil for each side, and cook for 3-4 minutes per side.
                                <br></br>
                                <br></br>
                                ( If a crispier burger is desired, cook longer. )



                        </p>
                        </Col>
                    </Row>
                    <div className="divider0-1">

                    </div>
                    <div id="sautéingOptionB" className="divider0">

                    </div>
                    <Row >
                        <Col size="md-7">
                            <p className="howToCookTitle">Sautéing: Option B</p>
                            <p className="howToCookInfo">
                                <br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Sauté on medium to low heat using a non-stick pan, add 3/4 tablespoon
                                of oil for each side, cook for 3 minutes, then turn over, place in a
                                preheated oven at 350 degrees for 3-5 minutes.
                                <br></br>
                                <br></br>
                                ( If a crispier burger is desired, cook longer. )

                        </p>
                        </Col>

                        <Col size="md-4">

                            <img className="howToCookFoto" alt="Burger Img Here" src="https://i.imgur.com/LBvCKzS.jpg"></img>

                        </Col>
                    </Row>

                    <div className="divider0-1">

                    </div>
                    <div id="grilling" className="divider0">

                    </div>

                    <Row >
                        <Col size="md-4">

                            <img className="AboutUsFoto" alt="Burger Img Here" src="https://i.imgur.com/3SY29mX.jpg"></img>

                        </Col>
                        <Col size="md-7">
                            <p className="aboutUsTitle2">Grilling:</p>
                            <p className="aboutUsInfo">
                                <br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Apply a tablespoon of oil on both sides, place the burger off center
                                on the grill.  Sear on one side for 3-4 minutes.  Then turn over the
                                burger and place it on the cooler part of the grill for 3-5 minutes.
                        </p>
                        </Col>
                    </Row>

                    <div className="divider0-1">

                    </div>
                    <div id="boiling" className="divider0">

                    </div>

                    <Row >
                        <Col size="md-7">
                            <p className="howToCookTitle">Boiling:</p>
                            <p className="howToCookInfo">
                                <br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Place the unopened BPA-Free bag in boiling water and cover for 10 minutes.
                                <br></br>
                                <br></br>

                                ( Remove Carefully )

                        </p>
                        </Col>

                        <Col size="md-4">

                            <img className="howToCookFoto" alt="Burger Img Here" src="https://i.imgur.com/ZbTSDWI.jpg"></img>

                        </Col>
                    </Row>

                    <div className="divider0-1">

                    </div>
                    <div id="baking" className="divider0">

                    </div>

                    <Row >
                        <Col size="md-4">

                            <img className="AboutUsFoto" alt="Burger Img Here" src="https://i.imgur.com/KJist9H.jpg"></img>

                        </Col>
                        <Col size="md-7">
                            <p className="aboutUsTitle2">Baking:</p>
                            <p className="aboutUsInfo">
                                <br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Place on a non-stick pan with 3/4 tablespoon of oil on each
                                side, then place in a preheated oven at 350 Degrees for 20 minutes.
                        </p>
                        </Col>
                    </Row>

                    <div className="divider0-1"></div>

                    <div id="microwaving" className="divider0">

                    </div>

                    <Row >
                        
                        <Col size="md-7">
                            <p className="howToCookTitle">Microwave:</p>
                            <p className="howToCookInfo">
                                <br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Microwave for 2 minutes in its BPA-free Bag. &nbsp; ( Remove Carefully )
                                <br></br>
                                <br></br>
                                **Microwaving: As a chef, I didn't want
to promote this style of cooking, as a
matter of fact I didn't want to consider it.
But it's funny how life throws you a
curveball. After being in business
approximately three years, I finally
started listening to my microwave
enthusiasts. Some of their reasons were,
they just needed a quick way to heat
their burgers while at work and some
simply don't like to cook. So, finally, I
gave it a try. To my surprise
microwaving, like boiling, produces a
tamale-like texture in two minutes. The
biggest surprise came long after the
burger completely cooled off. It was still
tender, enough that I could cut through it
with little effort, unlike processed dough
and batter products which turn hard as a
rock soon after being microwaved. This
should tell you something about natural
ingredients like the ones in my burgers.
So, thank you to all my microwaving
folks, you taught me something
amazing.**

                        </p>
                        </Col>
                        <Col size="md-4">

                            <img className="AboutUsFoto" alt="Burger Img Here" src="https://i.imgur.com/FN5AQEn.jpg"></img>

                        </Col>
                    </Row>

                    <div className="divider0-1"></div>



                </div>

            </Container>

            <Container fluid>
                <div className="windowRecipes">
                    <p id="sectionOne" className="aboutUsTitle">Our Amazing Suggested Combos</p>
                    <p id="poachedEggPlate" className="cookingInstructionsWarning">( Cook Frozen Do Not Defrost )</p>
                    <br></br>
                    <Row >
                        <Col size="md-4">

                            <img className="AboutUsFoto" alt="Burger Img Here" src={PoachedEggB1}></img>

                        </Col>
                        <Col size="md-7">
                            <p className="aboutUsTitle2">Poached Egg Plate</p>
                            <p className="aboutUsInfo">
                                Description:
                                <br></br><br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Poached egg over burger on a bed of arugula with pesto, pine nuts, feta, and cranberries.
                        
                        </p>
                        </Col>
                    </Row>
                    <div className="divider0-1">

                    </div>
                    <div id="poppersPlate" className="divider0">

                    </div>
                    <Row >
                        <Col size="md-7">
                            <p className="howToCookTitle">Poppers Plate</p>
                            <p className="howToCookInfo">
                                Description:
                                <br></br><br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Poppers over a veggie plater with a dipping sauce of your choice.

                        </p>
                        </Col>

                        <Col size="md-4">

                            <img className="howToCookFoto" alt="Burger Img Here" src={PoppersB2}></img>

                        </Col>
                    </Row>

                    <div className="divider0-1">

                    </div>
                    <div id="sliderPlate" className="divider0">

                    </div>

                    <Row >
                        <Col size="md-4">

                            <img className="AboutUsFoto" alt="Burger Img Here" src={SliderB3}></img>

                        </Col>
                        <Col size="md-7">
                            <p className="aboutUsTitle2">Slider Plate</p>
                            <p className="aboutUsInfo">
                                Description:
                                <br></br><br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Sliders served with lemon wedges and a sauce of your choice.
                        </p>
                        </Col>
                    </Row>

                    <div className="divider0-1">

                    </div>
                    <div id="thaiPlate" className="divider0">

                    </div>

                    <Row >
                        <Col size="md-7">
                            <p className="howToCookTitle">Thai Plate</p>
                            <p className="howToCookInfo">
                                Description:
                                <br></br><br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Burger over Thai noodles, Brussels sprouts, eggplant, and okra with a 
                                watermelon radish  &#38; ginger relish.

                        </p>
                        </Col>

                        <Col size="md-4">

                            <img className="howToCookFoto" alt="Burger Img Here" src={ThaiB4}></img>

                        </Col>
                    </Row>

                </div>

            </Container>
        </div>
    )
}

export default HowToCook;