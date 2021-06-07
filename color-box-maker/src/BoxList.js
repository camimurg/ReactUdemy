import React, { Component } from 'react';
import Box from './Box';
import NewFormBox from './NewFormBox';


class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: []
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }

  remove(){

  }
  create(newBox){
    this.setState({
      boxes: [...this.state.boxes, newBox]
    })
  }

  render() {
    const boxes = this.state.boxes.map(box =>
      <Box
        backgroundColor={box.backgroundColor}
        height={box.height}
        width={box.width}
      />);
      
    return (
      <div>
        <h1>Color Box Maker</h1>
        <NewFormBox createBox={this.create}/>
        {boxes}
      </div>
    );
  }
}

export default BoxList;
