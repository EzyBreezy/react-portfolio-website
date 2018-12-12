import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends Component {
    render() {
        return (
            <div class="Nav-Con">
                <ul>
                    {/* Explains About me coding and who I am What I like to do */}
                    <li> <a href="/"> About Me </a></li>
                    {/* Display Cards showing my projects */}
                    <li> <a href="/"> Projects </a></li>
                    {/* a Page with how to get in touch with me maybe just a drop down bar */}
                    <li> <a href="/"> Contact Me </a></li>
                     {/* Online downloadable Resume  */}
                    <li> <a href="/"> Resume </a></li>

                </ul>
            </div>
        );
    }
}

export default NavBar;