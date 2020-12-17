import React, { Component } from "react";
import { Input, Button, Form } from "antd";

export class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
    };
  }

  onSubmit(e) {
    e.preventDefault();
    // pass parameter to upper
    if (this.props.addTodo) {
      const title = this.state.title;
      // console.log(title);
      this.props.addTodo(title);
    }
    this.setState({ title: "" });
  }

  newTodo(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.value);
  }

  render() {
    return (
      <Form style={{ display: "flex" }}>
        <Input
          size="small"
          type="text"
          name="title"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.newTodo.bind(this)}
        />
        <Button
          style={{ margin: "5px 20px" }}
          size="middle"
          type="primary"
          onClick={this.onSubmit.bind(this)}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddTodo;
