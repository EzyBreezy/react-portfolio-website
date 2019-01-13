import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navigation/NavBar'
import Main from './components/content/Main'
import Footer from './components/footer/Footer'

class App extends Component {
  render() {
    return (
      <div class="site-content">
        <div className="navigation">
          <NavBar />
        </div>
        <div className="content">
          <Main />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
