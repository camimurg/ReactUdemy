import React, { Component } from 'react';
import './App.css';
import Die from './Die';
import RollDice from './RollDice'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Die face="five"/>
        <Die face="three"/>
        <Die face="two"/>
        <RollDice />
      </div>
    );
  }
}

export default App;
