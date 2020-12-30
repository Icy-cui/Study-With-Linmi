import React, { Component } from "react";
import "./App.css";
import hehe from "./hehe.svg";
// antd style
import { Space, Button } from "antd";
// clock block
import { Clock2 } from "./Clock";
// todo block
import Todos from "./Todos";
import AddTodo from "./AddTodo";
// Comment bock
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
// id
import { v4 } from "uuid";
import store from "./store/index";

const ComponentA = function (props) {
  return <h1>Welcome {props.name}, create your today's TODO list!</h1>;
};

class App extends Component {
  constructor() {
    super();
    this.state = store.getState()
  }

  handleShowOrHide() {
    this.setState({
      isShowClock: !this.state.isShowClock,
    });
  }

  componentWillMount() {
    this._loadComments();
  }

  /**
   * _loadComments: 在组件开始挂载的时候 显示评论列表数据
   */
  _loadComments() {
    let comments = localStorage.getItem("comments");
    if (comments) {
      comments = JSON.parse(comments);
      this.setState({ comments });
    }
  }

  _saveComments(comments) {
    localStorage.setItem(comments, JSON.stringify(comments));
  }

  submitContent(comment) {
    // console.log(comment);
    // console.log(this.state.comments);
    if (!comment) return;
    if (!comment.name) return alert("请输入用户名");
    if (!comment.comment) return alert("请输入评论内容");
    const comments = this.state.comments;
    comments.push(comment);
    this.setState({
      comments,
    });
    this._saveComments(comments);
  }

  handleDeleteComment(index) {
    const comments = this.state.comments;
    comments.splice(index, 1);
    this.setState({ comments });
    this._saveComments(comments);
  }

  markComplete = (id) => {
    // console.log('pass from todos ', {id})
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  addTodo(title) {
    console.log(title);
    const newTodo = {
      id: v4(),
      title: title,
      completed: false,
    };
    // ... : 扩展运算符 合并数组 / 将字符串转为真正的数组
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    console.log(this.state.todos);
    const test_comp = ComponentA({ name: "linmi" });
    return (
      <div className="App">
        <img src={hehe} alt="img" style={{ height: 200, width: 160 }} />
        {test_comp}

        <div>
          {this.state.isShowClock ? <Clock2 /> : null}
          <Button onClick={this.handleShowOrHide.bind(this)}>
            hide / show clock
          </Button>
        </div>

        <br />

        <h2>Your Todo List: </h2>
        <Space direction="vertical" size={30}>
          {/* 创建 todo list */}
          {/* 将 this.state.todos 作为参数传到 Todo class 中， Todo class 中即可使用 this.props 指代 this.state */}
          <Todos todos={this.state.todos} markComplete={this.markComplete} />
          <AddTodo addTodo={this.addTodo.bind(this)} />

          {/* 创建可评论可显示评论的部分 comment */}
          <div className="wrapper">
            <CommentInput onSubmit={this.submitContent.bind(this)} />
            <CommentList
              comments={this.state.comments}
              onDeleteComment={this.handleDeleteComment.bind(this)}
            />
          </div>
        </Space>
      </div>
    );
  }
}

export default App;
