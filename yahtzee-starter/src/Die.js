import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ['one', 'two', 'three', 'four', 'five', 'six'],
    val: 5
  };

  constructor(props) {
    super(props);
    this.handleLocked = this.handleLocked.bind(this)
  }
  
  handleLocked(){
    this.props.handleClick(this.props.idx);
  }

  render() {
    const {numberWords, locked, val, disabled, rolling} = this.props;
    const numbDice = numberWords[val - 1];
    let classes = `Die fas fa-dice-${numbDice} fa-5x `;
    if (locked) classes += 'Die-locked';
    if(rolling) classes += 'Die-rolling'
    return (
      <i className={classes} onClick={this.handleLocked} disabled={disabled}></i>
    );
  }
}

export default Die;
