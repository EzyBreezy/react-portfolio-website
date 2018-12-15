import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navigation/NavBar'
import Main from './components/content/Main'
import Footer from './components/footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <div class="Navigation">
          <NavBar />
        </div>
        <div class="Content">
          <Main />
        </div>
        <div class="Footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
