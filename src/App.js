import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <Main />
      </div>
    );
  }
}

export default App;
