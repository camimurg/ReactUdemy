import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';

export default class Sardines extends Component {
  render() {
    return (
      <div className="Sardines">
        <Message>
          <h1>Sardines</h1>
          <Link exact="true" to='/'> Back </Link>
        </Message>
      </div>
    )
  }
}
