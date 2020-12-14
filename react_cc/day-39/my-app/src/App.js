import React, { Component } from "react";
import hehe from "./hehe.svg";
import "./App.css";
import { Space, Button } from "antd";
import { Clock2 } from "./Clock";
import Todos from "./Todos";
import LikeButton from './LikeButton'
// import { Components } from "antd/lib/date-picker/generatePicker";

const ComponentA = function (props) {
  return <h1>Welcome {props.name}, create your today's TODO list!</h1>;
};

class App extends Component {
  state = {
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
            <Todos todos={this.state.todos}/>
            <Button type="primary">test butten</Button>
            <LikeButton />
        </Space>
        
      </div>
    );
  }
}

export default App;
