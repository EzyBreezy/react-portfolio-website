import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer-con">
                <div className="footer">
                    <div className="item-1">
                        <i className="fab fa-linkedin-in footer-item-2"></i>
                        <i className="fab fa-twitter footer-item-2"></i>
                        <i className="fab fa-github-alt footer-item-2"></i>
                        <i className="fab fa-free-code-camp footer-item-2"></i>
                    </div>
                    <div className="item-2">
                        {/* bottom of footer */}
                        <p>Last Modified: December 16 2018 </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;