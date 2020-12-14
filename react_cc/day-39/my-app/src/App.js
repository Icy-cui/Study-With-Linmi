import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from 'antd';
// import { render } from 'react-dom';
import Clock, { Clock2 } from "./Clock";

const ComponentA = function (props) {
  return <h1>ComponentA, welcome {props.name}</h1>;
};

const App = () => {
  const componentA1 = <ComponentA name="magicly" />;
  const componentA2 = ComponentA({ name: "magicly" });
  console.log(typeof componentA1, typeof componentA2, typeof ComponentA);
  console.log(componentA1, componentA2);
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <componentA1 />
      {componentA1}
      {componentA2}
      <Clock />
      <Clock2 />
      <Button type="primary">Button</Button>
    </div>
  );
};

export default App;
