import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className="home-con">
                <img src="https://i.imgur.com/DIe5Bxl.jpg" className="profile-img" alt=""></img>
                <h1 className="profile-title"> Hi, I am <span className="my-name">Ezana Bahta</span> </h1>
                <p className="profile-des"> I am a <i><strong>Developer</strong></i> who enjoys working in all levels of creative problem solving.</p>
            </div>
        );
    }
}

export default Home;