import React, { Component } from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <div class="Nav-Con">
                <h2> Ezana Bahta </h2>
                <ul>
                    <li class="nav-link"> <Link to="/" class="nav-link-a"> Home </Link> </li>
                    {/* Explains About me coding and who I am What I like to do */}
                    <li class="nav-link"> <Link to="/aboutme" class="nav-link-a"> About Me </Link></li>
                    {/* Display Cards showing my projects */}
                    <li class="nav-link"> <Link to="/projects" class="nav-link-a"> Projects </Link></li>
                    {/* a Page with how to get in touch with me maybe just a drop down bar */}
                    <li class="nav-link"> <Link to="/contact" class="nav-link-a"> Contact Me </Link></li>
                     {/* Online downloadable Resume  */}
                    <li class="nav-link"> <Link to="/resume" class="nav-link-a"> Resume </Link></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;