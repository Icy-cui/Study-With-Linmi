// Comments.js -- 只负责每条评论的具体显示
import React, { Component } from "react";
import { Card } from "antd";

class Comment extends Component {
  render() {
    return (
      <div className="Comment">
      {/* this.props.comment.name： 等于是Comment class新建了一个标签为comment用来传参数 */}
        <Card title={this.props.comment.name}>
        <p>{this.props.comment.content}</p>
        </Card> 
        <br />
      </div>
    );
  }
}

export default Comment;
