import React, { Component } from 'react';
import './todo.css'

//this component should display a div with the task of the todo.
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    }
    this.handleRemove = this.handleRemove.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.props.toggleTodo(this.props.id);
  }

  handleUpdate(evt) {
    evt.preventDefault();
    // take new task data and pass up to parent
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({isEditing: false})
  }

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  handleRemove() {
    this.props.removeTodo(this.props.id)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    let result;
    if(this.state.isEditing){
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}>  
            </input>
            <button> Save </button>
          </form>
        </div>
      )
    } else {
      result = (
        <div>
        <li className={this.props.completed ? "completed" : ""} onClick={this.handleToggle}>
          {this.props.task}
        </li>
        <button onClick={this.toggleForm}> ✏️ </button>
        <button onClick={this.handleRemove}> 🗑 </button>
        </div>
      )
    }
    return result
  }
}

export default Todo;
