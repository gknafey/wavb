import React from "react";
import { Col, Row, Container } from "../Grid";
import "./style.css";

function WhereToFind() {
    return (
        <div>
            <Container fluid>
            <div className="window windowMob">
            <p id="sectionOne" className="nutritionFactsTitle">Where You Can Find Us</p>
            <br></br>
                <Row >
                    <Col size="md-3">

                        

                    </Col>
                    <Col size="md-7">
                        
                        <p className="aboutUsInfo">
                            
                               
                                We can be found and bought at Hunterdon Flemington Farmers Market: <br></br>
                                Every 1st and 3rd Sunday of the month, from 9am to 1pm.
                                <br></br>
                                Hunterdon Land Trust Farmer's Market, Frenchtown Flemington Rd, Flemington, NJ 08822
                                <br></br>
                                <br></br>

                                Our products are also sold at the Woolverton Inn:
                                <br></br>
                                6 Woolverton Rd, Stockon NJ.
                                <br></br>
                                <br></br>

                                If you have any suggestions as to where you would like us to sell our products or if your 
                                a vendor that would like to sell our products. Please contact us at : &nbsp;&nbsp;
                                <a className="email" href="mailto:willpoughsr@gmail.com">willpoughsr@gmail.com</a>
                            
                        </p>
                    </Col>
                </Row>
            </div>

        </Container>

        </div>
    )
}

export default WhereToFind;