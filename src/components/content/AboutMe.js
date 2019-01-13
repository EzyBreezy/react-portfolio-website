import React, { Component } from 'react';
import './AboutMe.css'

class AboutMe extends Component {
    render() {
        return (
            <div className="about-con">
                <h1 className="about-title"> About Me</h1>

                <p> I am a Developer from the Washington DC area. </p>

                <p> 
                    I have worked in a lot of different fields and holding varius positions mostly in a sales invironment. I always had a high interest in technology but being as broad as it may I never knew which path to choose. I studdied reading Mike Myers books to be CompTIA certified and imbark down a networking field. But it didnt seem fullfilling as I thought it would be. I dabbled in penetration testing finding weak points in my wifi networks using tools such as "aircrack-ng" on my Linux distro's or "John the Ripper" to compile and crunch through librariers of passwords. It was exciting to see the knowledge being applied. But out of all that I have done what interests me most is coding. I had been intimidated by it after trying to teach myself Java with no mentor and failing flat on my face. But then I didnt know of all the resources I do now. I took General Assembly's 3 month imersive course to have the structure and guidance with high regard from prior alumni. I learned a lot in the 3 months. I also made great friends who are talented and as driven who help push through problems. But theres so much to learn that it is exciting to be a part of. I think the part that I like most is there is no right or wrong its all creativeity being applied. I visit meetups and I see the culture in this industry like no other that I had been part of. I go to meetups and learn new things I never heard of before and go home and research more into it and see how to apply it. Its so exciting to be a part of this. I also have worked on independent projects applying new things that I learn daily. I enjoy working on applications from the ground up. The aspect of taking an idea and seeing it itterate over till final product is a very exciting part to be a part of whether its one I thought of or someone elses.
                </p>

                <p>When I am not coding im usually working on cars such as ruitine oil change, brakes, or just a weekend cleaning or hanging out with friends or tackling a nifty project from <a href="https://www.instructables.com" target="_blank" rel="noopener noreferrer">instructables</a>. You can probably tell I enjoy DIY projects.</p>
            </div>
        );
    }
}

export default AboutMe;