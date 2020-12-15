import React, { Component } from "react";
import { Checkbox } from "antd";

class Todos extends Component {
  onChange(e) {
      console.log(e);
      console.log(`checked = ${e.key}`);
  }
  render() {
      return (this.props.todos.map((todo)=>(
            <Checkbox key={todo.id} style={{ width: "100%" }}>{todo.title}</Checkbox>
      )))
  }
}

export default Todos;
