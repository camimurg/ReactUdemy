import React, { Component } from 'react';
import './BoxContainer.css';
import Box from './Box';

export default class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 20,
    allColors: [
      '#9297C4',
      '#AA3E98',
      '#9CDE9F',
      '#80A4ED',
      '#BCD3F2',
      '#D4CB92',
      '#483D03',
      '#9EE493'
    ]
  }

  render(){
    const boxes = Array.from({length: this.props.numBoxes}).map(
      () => <Box colors={this.props.allColors}/>
    )
    return <div className="BoxContainer">{boxes}</div>
  }
}
