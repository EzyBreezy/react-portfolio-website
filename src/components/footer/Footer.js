import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer-con">
                <div className="footer">
                    <div className="item-1">
                        <a href="https://www.linkedin.com/in/ezana-bahta/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in footer-item-2"></i></a>
                        <a href="https://twitter.com/EzyBreezyCoolin" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter footer-item-2"></i></a>
                        <a href="https://github.com/EzyBreezy" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt footer-item-2"></i></a>
                        <a href="https://www.freecodecamp.org/ezybreezy" target="_blank" rel="noopener noreferrer"><i className="fab fa-free-code-camp footer-item-2"></i></a>
                    </div>
                    <div className="item-2">
                        {/* bottom of footer */}
                        <p>Last Modified: January 23 2018 </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;