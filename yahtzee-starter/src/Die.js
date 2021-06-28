import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props) {
    super(props);
    this.handleLocked = this.handleLocked.bind(this)
  }
  
  handleLocked(){
    this.props.handleClick(this.props.idx);
  }

  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleLocked}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;
