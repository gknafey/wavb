import React from "react";
import { Col, Row, Container } from "../Grid";
import Burger from "../../images/BurgerNice.JPG";
import "./style.css";

function AboutUsInfo() {
    return (
        <div>
        <Container fluid>
            <div className="window">
            <p id="sectionOne" className="aboutUsTitle">About Us</p>
            <br></br>
                <Row >
                    <Col size="md-4">

                        <img className="AboutUsFoto" alt="Burger Img Here" src={Burger}></img>

                    </Col>
                    <Col size="md-7">
                        <p className="aboutUsTitle2">About the Chef</p>
                        <p className="aboutUsInfo">
                                <pre></pre>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                I graduated from the French Culinary Institute in New York City
                                in the late 1980s.  As a young African-American male the 'hood'
                                , the south side of Chicago, culinary school was quite a shock 
                                for me.  Butter, flour, and eggs went practically into everything,
                                and I had to learn the cooking terms in French!  This was a whole 
                                different world from the short-order line cooking I was used to in
                                my early years.  But the speed and organizational skills I mastered 
                                back in those years stayed with me and have been put to good use. 
                                <br></br>
                                <pre></pre>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                My first job out of culinary school was cooking at the Sea Grill.  
                                Located in the world famous Rockefeller Center in NYC, a fast paced 
                                restaurant that had great acclaim, a rating not easily obtained and 
                                only awarded to the finest establishments.  Since that time, I've 
                                cooked professionally for over 40 years, mostly in NYC.  I worked 
                                for a variety of caterers, restaurants, and hotels, and picked up 
                                all kinds of cooking techniques and honed my skills.  A lifetime of 
                                working around different cultures and backgrounds has definitely 
                                helped to define my style of cooking.  Although I'm not a vegan or 
                                even a vegetarian, I do have the heart and mind to embrace other 
                                cuisines and make them my own.
                            
                        </p>
                    </Col>
                </Row>
                <Row >
                    <Col size="md-4">

                        <img className="AboutUsFoto2" alt="Burger Img Here" src={Burger}></img>

                    </Col>
                </Row>
            </div>

        </Container>

<Container fluid>
<div className="aboutUsWindow">
<p className="aboutUsTitle3">Humble Beginnings</p>
<br></br>
    <Row >
        <Col size="md-4">

            <img className="AboutUsFoto" alt="Burger Img Here" src={Burger}></img>

        </Col>
        <Col size="md-7">
            
            <p className="aboutUsInfo">

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    After cooking in NYC for over 20 years, I decided no more commuting,
                    I will work where I live in New Jersey.  So I got a job a boys home.
                    There I made my very first veggie burgers, they didn't look or taste 
                    anything like name brand burgers.  I asked plenty of friends, family, 
                    and co-workers to try them.  To my surprise, I recieved overwhelmingly 
                    positive feedback, including from a bunch of non-vegetable eating 
                    teenage boys!  I was pleasantly surprised and felt I was on to something.  
                    <br></br>
                    <pre></pre>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    It is funny how the whole opportunity came about.  One young man there at 
                    the boys home was a vegetarian and the meatless meals there were... well, 
                    let's say unappealing, to put it nicely.  This young man kept himself busy 
                    by doing more than his fair share of chores.  He often cleaned most of the 
                    kitchen with little to no help.  Knowing teenagers, you know this is a rare 
                    feat.  In return I showed my appreciation by cooking great vegetarian meals. 
                    Delicious eye popping mushrooms stuffed with garlicky creamed spinach over 
                    roasted vegetables.  Sautéed cauliflower with scallions and fresh lemon 
                    juice, topped with cheese.  This was my way of saying thank you. 
                    <br></br>
                    <pre></pre>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    After a 
                    while those special dishes became time consuming, considering I had an 
                    entire staff of 60 plus I had to feed.  I needed something I could reheat 
                    quickly, veggie burgers came to mind.  So I whipped up a batch right off 
                    the top of my head with what I had on hand.  They weren't the time perfected 
                    Will's Amazing Vegan Burgers you have now, those came many years and thousands 
                    of burgers later, but it was the start that led to where I am now. 
                
            </p>
        </Col>
    </Row>
    <Row >
        <Col size="md-4">

            <img className="AboutUsFoto3" alt="Burger Img Here" src={Burger}></img>

        </Col>
    </Row>
</div>

</Container>
</div>
    )
}

export default AboutUsInfo;