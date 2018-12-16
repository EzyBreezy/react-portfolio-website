import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sitemap.css'

class Sitemap extends Component {
    render() {
        return (
            <div className="sitemap-con">
                <h1> Site Map</h1>
                <ul>
                    <li className="sitemap-list"><Link to="/"> Home </Link></li>
                    <li className="sitemap-list"><Link to="/aboutme"> About</Link></li>
                    <li className="sitemap-list"><Link to="/projects"> Projects </Link></li>
                    <li className="sitemap-list"><Link to="/contact"> Contact </Link></li>
                    <li className="sitemap-list"><Link to="/Resume"> Resume </Link></li>
                </ul>
            </div>
        );
    }
}

export default Sitemap;