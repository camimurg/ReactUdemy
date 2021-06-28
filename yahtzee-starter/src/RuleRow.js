import React, { Component } from 'react';
import './RuleRow.css';

class RuleRow extends Component {
  render() {
    const {score, name, doScore, description} = this.props; //const score = this.props.score and so on..
    const isDisabled = score != undefined
    return (
      <tr className={`RuleRow RuleRow-${isDisabled ? 'disabled' : 'active'}`} 
          onClick={isDisabled ? null : doScore}>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{isDisabled ? score : description}</td>
      </tr>
    )
  }
}

export default RuleRow;
