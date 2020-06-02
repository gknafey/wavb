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
                        <Link to="/Ingredients" className="nav-item left link moveDownMobile414">
                            <ul className="listNoDot">
                            <li className="nav-item resize">
                                Ingredients
                            </li>
                            </ul>
                        </Link>
                        <Link to="/NutritionalFacts" className="nav-item left link moveDownMobile414">
                            <ul className="listNoDot">
                            <li className="nav-item resize">
                                Nutritional Facts
                            </li>
                            </ul>
                        </Link>
                        <Link to="/CookingInstructions" className="nav-item left link moveDownMobile414">
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
                        <Link to="/" className="nav-item link right0 moveDownMobile414">
                            <ul className="listNoDot">
                            <li className="nav-item resize mediaLocation">
                                Home
                            </li>
                            </ul>
                        </Link>
                        <Link to="/WhereToFindUs" className="nav-item link moveDownMobile414">
                            <ul className="listNoDot">
                            <li className="nav-item right resize mediaLocation">
                                Where to find us
                            </li>
                            </ul>
                        </Link>
                        <Link to="/AboutUs" className="nav-item link moveDownMobile414">
                            <ul className="listNoDot">
                            <li className="nav-item right resize mediaLocation">
                                About Us
                            </li>
                            </ul>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav;