import React, { Component } from "react";
import "./App.css";
import hehe from "./hehe.svg";
// antd style
import { Space, Button } from "antd";
// clock block
import { Clock2 } from "./Clock";
// todo block
import Todos from "./Todos";
// Comment bock
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

const ComponentA = function (props) {
  return <h1>Welcome {props.name}, create your today's TODO list!</h1>;
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      todos: [
        {
          id: 1,
          title: "Go out",
          completed: false,
        },
        {
          id: 2,
          title: "Play with cc",
          completed: false,
        },
        {
          id: 3,
          title: "Eat dinner",
          completed: false,
        },
      ],
    };
  }

  submitContent(comment) {
    // console.log(comment);
    // console.log(this.state.comments);
    this.state.comments.push(comment);
    this.setState({
      comments: this.state.comments,
    });
  }

  render() {
    console.log(this.state.todos);
    const test_comp = ComponentA({ name: "linmi" });
    return (
      <div className="App">
        <img src={hehe} alt="img" style={{ height: 200, width: 160 }} />
        {test_comp}
        <Clock2 />
        <h2>Your Todo List: </h2>
        <Space direction="vertical" size={30}>
          {/* 将 this.state.todos 作为参数传到 Todo class 中， Todo class 中即可使用 this.props 指代 this.state */}
          <Todos todos={this.state.todos} />
          <Button type="primary">test butten</Button>
          
          <div className="wrapper">
            <CommentInput onSubmit={this.submitContent.bind(this)} />
            <CommentList comments={this.state.comments} />
          </div>
        </Space>
      </div>
    );
  }
}

export default App;
