import React, { Component } from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <div className="nav-con">
                <h2 className="nav-title"> Ezana Bahta </h2>
                <ul className="nav-ul">
                    <li className="nav-link"> <Link to="/" className="nav-link-a"> Home </Link> </li>
                    {/* Explains About me coding and who I am What I like to do */}
                    <li className="nav-link"> <Link to="/aboutme" className="nav-link-a"> About <span className="nav-hidden">Me</span> </Link></li>
                    {/* Display Cards showing my projects */}
                    <li className="nav-link"> <Link to="/projects" className="nav-link-a"> Projects </Link></li>
                    {/* a Page with how to get in touch with me maybe just a drop down bar */}
                    <li className="nav-link"> <Link to="/contact" className="nav-link-a"> Contact <span className="nav-hidden"> Me</span> </Link></li>
                     {/* Online downloadable Resume  */}
                    <li className="nav-link"> <Link to="/resume" className="nav-link-a"> Resume </Link></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;