import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RenderedJsx from './components/ui/ui'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <RenderedJsx/>
      <Footer/>

      </div>
    );
  }
}

export default App;
