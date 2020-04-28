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
                            
                            <Link to="/" className="navbar-brand"> <img className="logoFooter" alt="Logo Here" src={Logo}></img> </Link>
                            
                            

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
                                        <Link to="/" className="nav-item left footerLinks"> Where to find us</Link>
                                    </li>
                                    <li>
                                        <Link to="/AboutUs#sectionZero" className="nav-item left footerLinks"> About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="nav-item left footerLinks"> Ingredients</Link>
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
                                        <Link to="/" className="nav-item left footerLinks"> Link 1</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="nav-item left footerLinks"> Link 2</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="nav-item left footerLinks"> Link 3</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="nav-item left footerLinks"> Link 4</Link>
                                    </li>
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