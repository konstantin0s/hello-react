import React, { Component } from 'react';
import Nav from './Nav';
import Body from './Body';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <Body />
      <Footer />
      </div>
    );
  }
}

export default App;
