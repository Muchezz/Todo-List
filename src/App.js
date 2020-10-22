import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import {v4 as uuid} from "uuid";
import './App.css';
import About from './components/pages/About';

class App extends Component {
  state = {
    todos: [
      {
        id :uuid(),
        title :"Take out trash",
        completed: false

      },
      {
        id :uuid(),
        title :"Walk",
        completed: false

      },
      {
        id :uuid(),
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
     id:uuid(),
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
      <Router>
          <div className= "App">
            <div className = "Container">
              <Header/>
              <Route exact path = "/" render={props =>(
                <React.Fragment>
                  <AddTodo AddTodo = {this.AddTodo}/>
                  <Todos todos = { this.state.todos} markComplete={this.markComplete}
                     delTodo ={this.delTodo} />
                </React.Fragment>
                )} />
              <Route  path ="about" component = {About}/>
            </div>
          </div>
      </Router>
      )
  }
}

export default App;
