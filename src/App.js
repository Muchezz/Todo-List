import React, { Component } from 'react';
import Header from './components/layout/header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id :uuid.v4(),
        title :"Take out trash",
        completed: false

      },
      {
        id :uuid.v4(),
        title :"Walk",
        completed: false

      },
      {
        id :uuid.v4(),
        title :"Shopping",
        completed: false

      }
    ]
  }
   //Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map( todo =>{
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }
 //Add Todo
 AddTodo = (title) => {
   const newTodo ={
     id:uuid.v4(),
     title,
     completed: false
   }
   this.setState({ todos: [...this.state.todos, newTodo]});
 }
  // Delete Todo
delTodo=(id) =>{
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id
    !== id)]});
}

  render() {
    
      return (
          <div className= "App">
            <div className = "Container">
              <Header/>
              <AddTodo AddTodo = {this.AddTodo}/>
              <Todos todos = { this.state.todos} markComplete={this.markComplete}
                delTodo ={this.delTodo} />
            </div>
          </div>
      )
  }
}

export default App;
