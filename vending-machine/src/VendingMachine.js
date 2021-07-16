import React, { Component } from 'react';
import VendingMachineImg from './VendingMachineImg.jpeg'
import { Link } from 'react-router-dom';
import Message from './Message';

export default class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine" style={ {backgroundColor: `url(${VendingMachineImg})`}}>
        <Message>
          <h1>VENDING MACHINE</h1>
          <h2>Take what you want, for free</h2>
        </Message>
        <Link exact="true" to='/soda' > Soda </Link>
        <Link exact="true" to='/chips' > Chips </Link>
        <Link exact="true" to='/sardines' > Sardines </Link>
      </div>
    )
  }
}
