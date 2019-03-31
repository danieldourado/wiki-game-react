import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './articles/Article'
import Logo from './Logo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo/>
          <Article/>
        </header>
      </div>
    );
  }
}

export default App;
