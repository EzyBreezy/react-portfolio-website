import React, { Component } from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <div class="Nav-Con">
                <h2> Ezana Bahta </h2>
                <ul>
                    <li> <Link to="/home"> Home </Link> </li>
                    {/* Explains About me coding and who I am What I like to do */}
                    <li> <Link to="/aboutme"> About Me </Link></li>
                    {/* Display Cards showing my projects */}
                    <li> <Link to="/projects"> Projects </Link></li>
                    {/* a Page with how to get in touch with me maybe just a drop down bar */}
                    <li> <Link to="/contact"> Contact Me </Link></li>
                     {/* Online downloadable Resume  */}
                    <li> <Link to="/resume"> Resume </Link></li>

                </ul>
            </div>
        );
    }
}

export default NavBar;