import React, { Component } from "react";
import { Button } from "antd";
// import ReactDOM from 'react-dom'
import "./index.css";

class LikeButton extends Component {
  //// 默认配置
  //   static defaultProps = {
  //     likedText: "取消",
  //     unlikedText: "点赞",
  //   };

  constructor(props) {
    super(props);
    this.state = { isLiked: false, times: 0 };
  }

  onClickButton(time) {
    console.log("Click on like button!");
    this.setState({
      isLiked: !this.state.isLiked,
      times: this.state.times + time,
    });

    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    // LikedButton 组件内部是通过 this.props 的方式获取到组件的参数的（ || 一边可以放默认参数）
    const wordings = this.props.wordings || {
      likedDisplay: "Like it!!!",
      unlikedDisplay: "Liked",
    };
    const time = 1;
    return (
      <Button onClick={this.onClickButton.bind(this, time)}>
        {this.state.isLiked ? wordings.unlikedDisplay : wordings.likedDisplay}{" 👍 "}
        {"changed time: "}
        {this.state.times}
      </Button>
    );
  }
}

export default LikeButton;
