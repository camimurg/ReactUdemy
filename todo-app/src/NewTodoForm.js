import React, { Component } from 'react';
const { v4: uuidv4 } = require('uuid');

// This component should render a form with one text input for the task to be created.
// When this form is submitted, a new Todo component should be created.
class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createTask({...this.state, id: uuidv4(), completed: false});
    this.setState({ task: "" })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">New todo</label>
        <input 
          type="text"
          placeholder="new task"
          id="task"
          name="task" //need to match what exactly we have in the state
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button> Add new task </button>
      </form>
    )
  }
}

export default NewTodoForm;
