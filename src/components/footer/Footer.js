import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="Footer-Con">
                <div className="Footer">
                    <div className="item-1-con">
                        <div className="item-1">
                            {/* info row */}
                            <a className="footer-item-1" href="http://maps.google.com/?q=Springfield, VA 22153"> <i className="fas fa-map-marker-alt"></i> Springfield, VA 22153</a>
                            <a className="footer-item-1" href="mailto:ezanab2@gmail.com"> <i className="fas fa-envelope-open"></i> Email Me </a>
                            <a className="footer-item-1" href="tel:13178353646"> <i className="fas fa-phone"></i> (317) 835 - 3646 </a>
                        </div>
                    </div>
                    <div className="item-2">
                        <i className="fab fa-linkedin-in footer-item-2"></i>
                        <i className="fab fa-twitter footer-item-2"></i>
                        <i className="fab fa-github-alt footer-item-2"></i>
                        <i className="fab fa-free-code-camp footer-item-2"></i>
                    </div>
                    <div className="item-3">
                        {/* Create a link to a full breakdown of all the views */}
                        <Link to="/sitemap" className="sitemap-link"> Sitemap </Link>
                    </div>
                    <div className="item-4">
                        {/* bottom of footer */}
                        <p>Last Modified: December 16 2018 </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;