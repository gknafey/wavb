import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../../images/WillsLogo.jpg";

function Nav() {
    return (
        <div id="sectionZero" className="border0">
            <div className="border1">
                <nav className="navbar">
                    <div className="nav left left0">
                        <Link to="/Ingredients" className="nav-item left link moveDownMobile414 hidden-Mobile">
                            <ul className="listNoDot">
                                <li className="nav-item resize">
                                    Ingredients
                            </li>
                            </ul>
                        </Link>
                        <Link to="/NutritionalFacts" className="nav-item left link moveDownMobile414 hidden-Mobile">
                            <ul className="listNoDot">
                                <li className="nav-item resize">
                                    Nutritional Facts
                            </li>
                            </ul>
                        </Link>
                        <Link to="/CookingInstructions" className="nav-item left link moveDownMobile414 hidden-Mobile">
                            <ul className="listNoDot">
                                <li className="nav-item resize">
                                    Cooking Instructions
                            </li>
                            </ul>
                        </Link>
                        <ul className="listNoDot">
                            <li className="nav-item moveDownMobile414">
                                <Link to="/" className="navbar-brand"> <img className="logo moveDownMobile414" alt="Logo Here" src={Logo}></img> </Link>
                            </li>
                        </ul>
                        <Link to="/" className="nav-item link right0 moveDownMobile414 hidden-Mobile">
                            <ul className="listNoDot">
                                <li className="nav-item resize mediaLocation">
                                    Home
                            </li>
                            </ul>
                        </Link>
                        <Link to="/WhereToFindUs" className="nav-item link moveDownMobile414 hidden-Mobile">
                            <ul className="listNoDot">
                                <li className="nav-item right resize mediaLocation">
                                    Where to find us
                            </li>
                            </ul>
                        </Link>
                        <Link to="/AboutUs" className="nav-item link moveDownMobile414 hidden-Mobile">
                            <ul className="listNoDot">
                                <li className="nav-item right resize mediaLocation">
                                    About Us
                            </li>
                            </ul>
                        </Link>
                        <div className="btn-group hidden-Nav moveDownMobile414">
                            <button style={{color: "#fff"}} type="button" className="btn dropdown-toggle hidden-NavStyle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Navigation
                        </button>
                            <div className="dropdown-menu hidden-NavStyle2">
                                <Link to="/" className="dropdown-item thisHiddenNav">Home</Link>
                                <div className="dropdown-divider thisNavColor"></div>
                                <Link to="/Ingredients" className="dropdown-item thisHiddenNav">Ingredients</Link>
                                <div className="dropdown-divider thisNavColor"></div>
                                <Link to="/NutritionalFacts" className="dropdown-item thisHiddenNav">Nutritional Facts</Link>
                                <div className="dropdown-divider thisNavColor"></div>
                                <Link to="/CookingInstructions" className="dropdown-item thisHiddenNav">Cooking Instructions</Link>
                                <div className="dropdown-divider thisNavColor"></div>
                                <Link to="/WhereToFindUs" className="dropdown-item thisHiddenNav">Where to find us</Link>
                                <div className="dropdown-divider thisNavColor"></div>
                                <Link to="/AboutUs" className="dropdown-item thisHiddenNav">About Us</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav;