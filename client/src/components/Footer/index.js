import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./style.css";
import Logo from "../../images/WillsLogo.jpg";

function Footer() {
    return (
        <div className="footerBorder1">
            <div className="footerBorder0">
            <footer className="page-footer font-small blue pt-4 footerColor">

                
                <div className="container-fluid text-center text-md-left">

                    
                    <div className="row">

                        
                        <div className="col-md-3 mt-md-0 mt-3">
                            
                            <Link to="/#sectionZero" className="navbar-brand"> <img className="logoFooter" alt="Logo Here" src={Logo}></img> </Link>
                            
                            

                        </div>

                        <div className="col-md-3 mt-md-0 mt-3">
                            
                            
                            <p className="textFooter">

                                Thank you for using our site. We are dedicated to making quality Vegan Burgers and hope you enjoy our product.
                                
                                </p>
                            

                        </div>
                        
                        

                        <hr className="clearfix w-100 d-md-none pb-3" />

                        <div className="col-md-3 mb-md-0 mb-3">
   
                            <p className="linkTitle0">Site Links</p>

                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="/#sectionZero" className="nav-item left footerLinks"> Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/WhereToFindUs#sectionZero" className="nav-item left footerLinks"> Where to find us</Link>
                                    </li>
                                    <li>
                                        <Link to="/AboutUs#sectionZero" className="nav-item left footerLinks"> About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/Ingredients#sectionZero" className="nav-item left footerLinks"> Ingredients</Link>
                                    </li>
                                    <li>
                                        <Link to="/NutritionalFacts#sectionZero" className="nav-item left footerLinks"> Nutritional Facts</Link>
                                    </li>
                                    <li>
                                        <Link to="/CookingInstructions#sectionZero" className="nav-item left footerLinks"> Cooking Instructions</Link>
                                    </li>
                                </ul>

                        </div>
                            
                         
                        <div className="col-md-3 mb-md-0 mb-3">

                            <p className="linkTitle0"> Affiliated Links</p>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="https://www.hunterdonlandtrust.org/farmers-market/" target="_blank" rel="noopener noreferrer" className="nav-item left footerLinks"> HLT Farmers Market</a>
                                    </li>
                                    <li>
                                    <a href="http://www.cowsoutside.com/" target="_blank" rel="noopener noreferrer" className="nav-item left footerLinks"> Bobolink Dairy and Bakehouse</a>
                                    </li>
                                    <li>
                                    <a href="https://www.comeback.farm/" target="_blank" rel="noopener noreferrer" className="nav-item left footerLinks"> Comeback Farm</a> </li>
                                    <li>
                                    <a href="https://www.localharvest.org/river-lea-house-M67853" target="_blank" rel="noopener noreferrer" className="nav-item left footerLinks"> River Lea House</a></li>
                                    <li>
                                    <a href="https://www.ironboundhardcider.com/" target="_blank" rel="noopener noreferrer" className="nav-item left footerLinks"> Ironbound Farm</a></li>
                                    <li>
                                    <a href="https://www.rivervalleycommunitygrains.com/" target="_blank" rel="noopener noreferrer" className="nav-item left footerLinks"> River Valley Community Grains</a></li>
                                </ul>

                        </div>
                            

                    </div>
                  

                </div>
                   

                    
                <div className="footer-copyright text-center py-3">© 2020 Copyright
                
                </div>
                    

            </footer>
        </div>
    </div>
            
        
    )
}

export default Footer;