import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id :1,
        title :"Take out trash",
        completed: false

      },
      {
        id :2,
        title :"Walk",
        completed: false

      },
      {
        id :3,
        title :"Shopping",
        completed: true

      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map( todo)})
  }
  render() {
    
      return (
          <div className= "App">
              < Todos todos = { this.state.todos} markComplete={this.markComplete} />
          </div>
      )
  }
}

export default App;
