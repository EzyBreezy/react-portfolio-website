import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navigation/NavBar'
import Main from './components/content/Main'
import Footer from './components/footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <div className="Navigation">
          <NavBar />
        </div>
        <div className="Content">
          <Main />
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
