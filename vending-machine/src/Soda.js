import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';

export default class Soda extends Component {
  render() {
    return (
      <div className="Soda">
        <Message>
          <h1>Soda</h1>
          <Link exact="true" to='/'> Back </Link>
        </Message>
      </div>
    )
  }
}
