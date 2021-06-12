import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Axios from "axios";

import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(
      (res) => this.setState({ todos: res.data })
    );
  }

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
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      (res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
    );
  };

  // AddTodo
  addTodo = (title) => {
    Axios.post("https://jsonplaceholder.typicode.com/todos", {
      id: uuid,
      title,
      comleted: false,
    }).then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <React.Fragment>
            <Header />
            <AddTodo addTodo={this.addTodo} />
            <Todos
              todos={this.state.todos}
              markComplete={this.markComplete}
              deleteTodo={this.deleteTodo}
            />
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default App;
