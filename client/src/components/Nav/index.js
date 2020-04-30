import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../../images/WillsLogo.jpg";

function Nav() {
    return (
        <div id="sectionZero" className="border0">
            <div className="border1">
                <nav className="navbar">
                    <ul className="nav left">
                        <Link to="/Ingredients" className="nav-item left link">
                            <li className="nav-item resize">
                                Ingredients
                            </li>
                        </Link>
                        <Link to="/NutritionalFacts" className="nav-item left link">
                            <li className="nav-item resize">
                                Nutritional Facts
                            </li>
                        </Link>
                        <Link to="/CookingInstructions" className="nav-item left link">
                            <li className="nav-item resize">
                                Cooking Instructions
                            </li>
                        </Link>
                            <li className="nav-item">
                            <Link to="/" className="navbar-brand"> <img className="logo" alt="Logo Here" src={Logo}></img> </Link>
                            </li>
                        <Link to="/" className="nav-item link right0">
                            <li className="nav-item resize mediaLocation">
                                Home
                            </li>
                        </Link>
                        <Link to="/WhereToFindUs" className="nav-item link">
                            <li className="nav-item right resize mediaLocation">
                                Where to find us
                            </li>
                        </Link>
                        <Link to="/AboutUs" className="nav-item link">
                            <li className="nav-item right resize mediaLocation">
                                About Us
                            </li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav;