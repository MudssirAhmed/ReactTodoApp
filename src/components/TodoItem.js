import React, { Component } from "react";
import propTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#333",
      padding: "10px",
      borderTop: "1px #ccc solid",
      textDecoration: this.props.todo.complete ? "line-through #fff" : "none",
    };
  };

  markComplete = (e) => {
    console.log(this.props);
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p style={{ color: "#fff" }}>
          <input
            type="checkBox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button
            onClick={this.props.deleteTodo.bind(this, id)}
            style={btnStyle}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired,
};

//Button Styles
const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  width: "15px",
  padding: "10px, 10px",
  cursor: "pointer",
  borderRadius: "50%",
  float: "right",
};

export default TodoItem;
