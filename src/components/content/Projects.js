import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';
import './Projects.css'

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0}
    }

    render() {
        return (
            <div className="category-tabs-con">
                <h1> Projects </h1>
                <ul>
                    <li>React</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>JavaScript</li>
                    <li>HTML5</li>
                </ul>

                <section className="projects">
                </section>
            </div>
        );
    }
}

export default Projects;