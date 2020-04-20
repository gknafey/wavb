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
                        <li className="nav-item resize">
                            <Link to="/" className="nav-item left link">Ingredients </Link>
                        </li>
                        <li className="nav-item resize">
                            <Link to="/" className="nav-item left link">Nutritional Facts </Link>
                        </li>
                        <li className="nav-item resize">
                            <Link to="/" className="nav-item left link">Cooking Instructions </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="navbar-brand"> <img className="logo" alt="Logo Here" src={Logo}></img> </Link>
                        </li>
                        <li className="nav-item right0 resize">
                            <Link to="/" className="nav-item link">Home </Link>
                        </li>
                        <li className="nav-item right resize">
                            <Link to="/" className="nav-item link">Where to find us </Link>
                        </li>
                        <li className="nav-item right resize">
                            <Link to="/" className="nav-item link">About Us </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav;