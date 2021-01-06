import React, { Component } from "react";
import { v4 as uuid } from "uuid";

import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Pay electricity bill",
        complete: false,
      },
      {
        id: 2,
        title: "Call management",
        complete: false,
      },
      {
        id: 3,
        title: "Take Medication",
        complete: false,
      },
      {
        id: 4,
        title: "Learn react",
        complete: false,
      },
    ],
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.complete = !todo.complete;
        }
        return todo;
      }),
    });
  };

  // Delete Todos
  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  // AddTodo
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      complete: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
