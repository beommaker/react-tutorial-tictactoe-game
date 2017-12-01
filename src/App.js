import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game.jsx'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">tic-tac-toe GAME!</h1>
        </header>
        <main className="App-main">
          <Game />
        </main>
      </div>
    );
  }
}

export default App;
