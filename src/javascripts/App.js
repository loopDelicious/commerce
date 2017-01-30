import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../css/App.css';
import Product from './product.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="joyce-banner">
            <h1>Joyce's Hydration Accessories</h1>
            <h3>Thirsty? Water 'bout it?</h3>
        </div>
        <Product />
      </div>
    );
  }
}

export default App;
