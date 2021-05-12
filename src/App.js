import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import './App.css';

import TodoList from './Components/TodoList';
import TodoInput from './Components/TodoInput';

class App extends Component {
  state = {
    todos: [],
    idCount: 0
  }

  componentDidMount(){
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const idCount = localStorage.getItem('idCount') || 0;
    this.setState({
      todos,
      idCount
    })
  }

  addTodo(todoName){
    this.setState(prevState => {
      const newTodos = prevState.todos.slice().concat({
        name: todoName,
        id: prevState.idCount
      });
      localStorage.setItem('todos', JSON.stringify(newTodos));
      localStorage.setItem('idCount', JSON.stringify(prevState.idCount));
      return {
        todos: newTodos,
        idCount: prevState.idCount + 1,
        input: ''
      }
    })
  }

  deleteTodo(todoId){
    this.setState(prevState => {
      const newTodos = prevState.todos.slice().filter( todo => todo.id !== todoId );
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return {
        todos: newTodos
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Card className="main-container">
          <h1 className="title">My Todo App</h1>
          <TodoInput handleSubmit={this.addTodo.bind(this)} />
          <TodoList data={this.state.todos} handleClick={this.deleteTodo.bind(this)} />
        </Card>
      </div>
    );
  }
}

export default App;