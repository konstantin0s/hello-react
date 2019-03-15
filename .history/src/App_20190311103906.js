import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
       <Footer className="Footer"/>
      </div>
    );
  }
}

export default App;
