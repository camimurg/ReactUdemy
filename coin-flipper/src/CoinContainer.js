import React, {Component} from 'react';
import { choice } from './helpers';
import Coin from './Coin';

export default class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {side: 'heads', imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
      {side: 'tails', imgSrc: "https://tinyurl.com/react-coin-tails-jpg"}
    ]
  }
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const newCoin = choice(this.props.coins);
    console.log(newCoin)
    
    this.setState(oldState => {
      return {
        currCoin: newCoin,
        nFlips: oldState.nFlips + 1,
        nHeads: oldState.nHeads + (newCoin.side === 'heads' ? 1 : 0),
        nTails: oldState.nTails + (newCoin.side === 'tails' ? 1 : 0)
      };
    });
  }

  handleClick(e){
    this.flipCoin();
  };

  render() {
    return (
      <div className="CoinContainer">
        {this.state.currCoin && <Coin info={this.state.currCoin} /> }
        <h2> Let's Flip a Coin!</h2>
        <button onClick={this.handleClick}>play</button>
        <p>Out of {this.state.nFlips} flips.</p>
        <p>There have been {this.state.nHeads} heads</p>
        <p>There have been {this.state.nTails} tails</p>
      </div>
    )
  }
  
}
