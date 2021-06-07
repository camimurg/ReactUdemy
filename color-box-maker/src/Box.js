import React, { Component } from 'react';

class Box extends Component {
  render() {
    return (
      <div>
        <div style={{ 
            backgroundColor: this.props.backgroundColor,
            height: `${this.props.height}em`,
            width: `${this.props.width}em`,
          }}>
        </div>
        <button>DELETE</button>
      </div>
    )
  }
}

export default Box;
