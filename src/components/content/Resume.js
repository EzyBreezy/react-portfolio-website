import React, { Component } from 'react';
import './Resume.css'

class Resume extends Component {
    render() {
        return (
            <div className="resume-con">
                <h1>Ezana Bahta</h1>
                <p>Software Developer</p>
                <ul>
                    <li><a href="317-835-3646">Phone</a></li>
                    <li><a href="ezanab2@gmail.com">Email</a></li>
                    <li><a href="github">Github</a></li>
                    <li><a href="linkedin">LinkedIn</a></li>
                </ul>

                <h2>Summary</h2>
                <p>I am a Junior Developer who enjoys working in all levels of creative problem solving. I am highly motivated and passionate in innovation.</p>

                <h2>Education</h2>
                <p>General Assembly, Programming Bootcamp Aug 2018 - Nov 2018</p>

                <h2>Experience</h2>

                <div className="ga-con">
                    <h3>General Assembly</h3>
                    <p>August 2018 to November 2018</p>
                    <ul>
                        <li>12 Week Course where I learned and developed the skills needed to build dynamic web applications and gain profficiency in the theory and application of web development</li>
                        <li>Designed and Developed multiple Applications using technologies that include JavaScript, HTML, CSS, Node.js, Express, MongoDB, React.</li>
                    </ul>
                </div>

                <div className="sprint-con">
                    <h3>Sprint</h3>
                    <p>June 2015 to July 2018</p>
                    <ul>
                        <li>I scheduled and lead weekly store meetings for sales team on promotions and best practices.</li>
                        <li>Supervised a sales team of 7 sales consultants.</li>
                        <li>Manage sales floor and interacted with customers and supported our sales team to maintain a smooth que flow.</li>
                    </ul>
                </div>

                <div className="ars-con">
                    <h3>American Residential Services</h3>
                    <p>September 2013 to June 2015</p>
                    <ul>
                        <li>Succesfully Acquired on average 5 leads a day for Heating and Air Conditioning Services.</li>
                        <li>Stayed in contact with customers through sales process to insure customer satisfaction and expectactions.</li>
                        <li>Awarded top revenue producer at $121.41 per hour in 2015.</li>
                        <li>Awarded Bronze run rate at 50% leads run.</li>
                    </ul>
                </div>

                <div className="its-con">
                
                </div>
            </div>
        );
    }
}

export default Resume;