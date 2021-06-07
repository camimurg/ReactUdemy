import React, { Component } from 'react';
import uuid from "uuid/v4";

class NewFormBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      width: "",
      backgroundColor: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newBox = {...this.state, id: uuid() }
    this.props.createBox(newBox);
    this.state({
      height: "",
      width: "",
      backgroundColor: ""
    })
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='height'>Height: </label>
          <input
            type='text'
            id='height'
            name='height'
            value={this.state.height}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='width'>Width: </label>
          <input
            type='text'
            id='width'
            name='width'
            value={this.state.width}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='backgroundColor'>BackgroundColor: </label>
          <input
            type='text'
            id='backgroundColor'
            name='backgroundColor'
            value={this.state.backgroundColor}
            onChange={this.handleChange}
          />
        </div>
        <button>Add a new box</button>
      </form>
    )
  }
}

export default NewFormBox;
