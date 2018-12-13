import React, { Component } from 'react';
import Home from './Home'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import { Switch, Route } from 'react-router-dom';


class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/aboutme" component={AboutMe} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/resume" component={Resume} />
                </Switch>
            </div>
        );
    }
}

export default Main;