import React, { Component } from "react";

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 };
    this.genRendom = this.genRendom.bind(this);
  }
  
  genRendom(e) {
    //pick a random number 1-10
    let rend = Math.floor(Math.random() * 10) + 1;
    // update state with new rand
    this.setState({ num: rend });
  }

  render() {
    return(
      <div>
        <h1> The number is: {this.state.num}</h1>
        {this.state.num === 7 
          ? <h2> YOU WIN! </h2>
          : <button onClick={this.genRendom}> Random </button>
        }
      </div>
    )
  }
}

export default Clicker
