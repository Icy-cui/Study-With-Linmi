import React, { Component } from "react";
import { Checkbox } from "antd";
import propTypes from "prop-types";

class TodoItem extends Component {
  // add line to complete item
  changeStyle() {
    return {
      padding: "5px",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      color: this.props.todo.completed ? '#cccccc' : '#000000'
    };
  }

  render() {
      // shorten name
    const { id, title } = this.props.todo;
    return (
      <div>
        {/* get id of checked item */}
        <Checkbox
          onChange={this.props.markComplete.bind(this, id)}
          style={this.changeStyle()}
        >
          {title}
        </Checkbox>
      </div>
    );
  }
}

// set propTypes requirement -- name of the class
TodoItem.propTypes = {
  todo: propTypes.object.isRequired,
};

export default TodoItem;
