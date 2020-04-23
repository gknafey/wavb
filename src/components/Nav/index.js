import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../../images/WillsLogo.jpg";

function Nav() {
    return (
        <div className="border0">
            <div className="border1">
                <nav className="navbar">
                    <ul className="nav left">
                        <Link to="/" className="nav-item left link">
                            <li className="nav-item resize">
                                Ingredients
                            </li>
                        </Link>
                        <Link to="/" className="nav-item left link">
                            <li className="nav-item resize">
                                Nutritional Facts
                            </li>
                        </Link>
                        <Link to="/" className="nav-item left link">
                            <li className="nav-item resize">
                                Cooking Instructions
                            </li>
                        </Link>
                            <li className="nav-item">
                            <Link to="/" className="navbar-brand"> <img className="logo" alt="Logo Here" src={Logo}></img> </Link>
                            </li>
                        <Link to="/" className="nav-item link">
                            <li className="nav-item right0 resize">
                                Home
                            </li>
                        </Link>
                        <Link to="/" className="nav-item link">
                            <li className="nav-item right resize">
                                Where to find us
                            </li>
                        </Link>
                        <Link to="/" className="nav-item link">
                            <li className="nav-item right resize">
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