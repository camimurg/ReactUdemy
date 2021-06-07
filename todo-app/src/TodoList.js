// this component should render the NewTodoForm component 
// and should render the list of Todo components. 
// Place your state that contains all of the todos in this component.

import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }

    this.create = this.create.bind(this)
    this.remove = this.remove.bind(this)
    this.update = this.update.bind(this)
    this.toggleCompletion = this.toggleCompletion.bind(this)
  }
  remove(taskId) {
    this.setState({
      todos: this.state.todos.filter(task => task.id !== taskId)
    });
  }
  
  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
    
  }

  update(id, updatedTask){
    const updatedTodos = this.state.todos.map( todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask}
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  toggleCompletion(id){
    const updatedTodos = this.state.todos.map( todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed}
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  render(){
    const todos = this.state.todos.map( todo => {
      return <Todo 
        key={todo.id}
        id={todo.id} 
        task={todo.task}
        completed={todo.completed}
        removeTodo={this.remove}
        updateTodo={this.update}
        toggleTodo={this.toggleCompletion}  
      />
    });
    console.log(todos)
    return (
      <div>
        <h1>Todo list</h1>
        <NewTodoForm createTask={this.create} />
        <ul>
          <li>{todos}</li>
        </ul>
      </div>
    )
  }
}

export default TodoList;
