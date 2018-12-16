import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div class="Footer-Con">
                <div class="Footer">
                    <div class="item-1-con">
                        <div class="item-1">
                            {/* info row */}
                            <p class="footer-item-1"> <i class="fas fa-map-marker-alt"></i> Springfield, VA 22153</p>
                            <a class="footer-item-1" href="mailto:ezanab2@gmail.com"> <i class="fas fa-envelope-open"></i> Email Me </a>
                            <a class="footer-item-1" href="tel:13178353646"> <i class="fas fa-phone"></i> (317) 835 - 3646 </a>
                        </div>
                    </div>
                    <div class="item-2">
                        <i class="fab fa-linkedin-in"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-github-alt"></i>
                        <i class="fab fa-free-code-camp"></i>
                    </div>
                    <div class="item-3">
                        {/* Create a link to a full breakdown of all the views */}
                        <p> Sitemap </p>
                    </div>
                    <div class="item-4">
                        {/* bottom of footer */}
                        <p>Last Modified: December 16 2018 </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;