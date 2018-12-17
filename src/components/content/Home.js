import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className="home-con">
                <img src="https://i.imgur.com/DIe5Bxl.jpg" class="profile-img" alt="Ezana Profile Picture"></img>
                <h1> Hi, I am <span className="my-name">Ezana Bahta</span> </h1>
                <p> I am a <i><strong>Developer</strong></i> who enjoys working in all levels of creative problem solving.</p>
            </div>
        );
    }
}

export default Home;