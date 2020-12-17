import React, { Component } from "react";
import TodoItem from "./TodoItem";
import propTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      // pass the todo's id
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
      />
    ));
  }
}

// set propTypes requirement  -- name of the class
Todos.propTypes = {
  todos: propTypes.array.isRequired,
};

export default Todos;
