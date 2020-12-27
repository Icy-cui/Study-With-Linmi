import React, { Component } from "react";

// const Clock = () => {
//   return <h1>{new Date().toLocaleTimeString()}</h1>;
// };

class Clock2 extends Component {
  constructor(props) {
    // constructor里第一行必须是这行，否则会报错
    super(props);
    // 这里是唯一一处直接复制给this.state的，其他地方请用this.setState({...})
    // 建议是：跟render相关的东西放在state里面，不相关的放外面
    this.state = {
      time: new Date().toLocaleTimeString()
    };
    console.log('constructor')
  }

  componentDidMount() {
    /**
     * 组件挂载完成以后，也就是 DOM 元素已经插入页面后调用
     */
    console.log("componentDidMount");
    this.timer = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    });
  }

  componentWillUnmount() {
    /**
     * 组件对应的 DOM 元素从页面中删除之前调用
     */
    console.log("componentWillUnmount");
    clearInterval(this.timer);
  }

  render() {
    return <h1>Now the time is: {this.state.time}</h1>;
  }
}

// export default Clock;
export { Clock2 };
