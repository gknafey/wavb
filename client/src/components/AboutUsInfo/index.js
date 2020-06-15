import React from "react";
import { Col, Row, Container } from "../Grid";
import Client from "../../images/Client.jpg";
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

                            <img className="AboutUsFoto" alt="Client Here" src={Client}></img>

                        </Col>
                        <Col size="md-7">
                            <p className="aboutUsTitle2">About the Chef</p>
                            <p className="aboutUsInfo">

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

                            {/* <img className="AboutUsFoto2" alt="Burger Img Here" src={Burger}></img> */}

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

                            <img className="AboutUsFoto" alt="Burger Here" src="https://i.imgur.com/vMthQt2.jpg"></img>

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

                            {/* <img className="AboutUsFoto3" alt="Burger Img Here" src={Burger}></img> */}

                        </Col>
                    </Row>
                </div>

            </Container>

            <Container fluid>
                <div className="aboutUsWindow">
                    <p className="aboutUsTitle3">Special Thanks</p>
                    <br></br>
                    <Row >

                        <Col size="md-2"></Col>

                        <Col size="md-8">

                            <p className="specialThanksInfo">

                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                First, I want to thank my God, life has shown me many things but this
                                scripture helped me to learn and grow in my walk with God.
                    <br></br>
                                <br></br>

                    Proverbs 3:5-6 (King James Version)<br></br>
                    Trust in the LORD with all thine heart; and lean not unto thine own
                    understanding.  In all thy ways acknowledge him, and he shall direct
                    thy paths.
                    <br></br>
                                <br></br>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    These words are simple to understand but not always easy to accomplish.
                    The more I got tired of banging my head and realizing my ways from his.
                    The more I started trusting God the more I saw this proverb come to life
                    in many ways.  It's a relationship that happens when one stands faithfully
                    with believing.  To all New Jersyans and whoever else, I'm grateful to make
                    these vegan burgers available.
                    <br></br>
                                <br></br>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Second, I need to thank a whole host of family and friends who helped me.
                    The following were directly involved in this project of love and life quest.
                    <br></br>
                                <br></br>
                            </p>
                            <ul className="specialThanksInfo">
                                <li>
                                    Brian Gocher: Helped with designs and brochures and labels.
                        </li>
                                <li>
                                    Jason Manuel: A gracious rock of a friend, who hosted my first
                                    vegan burger kick-off dinner party and always pointed me in a
                                    heavenly direction.
                        </li>
                                <li>
                                    Lazarus Baptiste: A planet in my solar system, who took pro-quality
                                    photos of my burgers at that dinner party, as well as help me develop
                                    a positive believer image.
                        </li>
                                <li>
                                    Pollyn Horvath: Designed the logo that I don't have to think twice about.
                        </li>
                                <li>
                                    Eddie Her: Who blesses me with great book keeping advice.
                        </li>
                                <li>
                                    My Family: My brother Duane, my sisters, Cheryl and Vickie(who passed away),
                                    Yuri, Dennis, and Bobby.  They encouraged me through good times and bad.
                        </li>
                                <li>
                                    Pastor Rich: A man for whom I'm grateful for, who extended patience with a
                                    private kitchen to help me get this business off the ground.
                        </li>
                                <li>
                                    Hunterdon Land Trust Farmers Market(and other organic farmers): Vendors
                                    and venues that I work(ed) with and taught me more than I ever expected.
                        </li>
                                <li>
                                    Ironbound Hard Cider in Asbury NJ: Who thought me garter scents of community.
                        </li>
                                <li>
                                    NJ Veg Fast: A great venue in featuring organic products.
                        </li>
                            </ul>
                            <p className="specialThanksInfo">
                                <br></br>
                                <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Third, I'm thankful for all those believers who helped by praying (it worked!),
                    and working with me, as my taste-testers/guinea pigs who help shape the final product.
                    There valuable opinions gave me plenty to consider.
                    <br></br>
                                <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Last, and certainly not least, I thank Maria, my wife, for standing by through
                    the ups and downs and for keeping our boys blessed and in order and helping me with
                    mountains of paperwork.
                    <br></br>
                                <br></br>
                    Love you all and Thank you,
                    <br></br>
                                <br></br>
                    Chef/Proprietor
                    <br></br>
                    Will Pough


            </p>
                        </Col>
                    </Row>

                </div>

            </Container>
        </div>
    )
}

export default AboutUsInfo;