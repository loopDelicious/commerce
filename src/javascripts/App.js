import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../css/App.css';
import Product from './product.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Product />
      </div>
    );
  }
}

export default App;
