// Comments.js -- 只负责每条评论的具体显示
import React, { Component } from "react";
import { Card } from "antd";
// LikeButton block
import LikeButton from "./LikeButton";

class Comment extends Component {
  render() {
    console.log(this.props.comment);
    return (
      <div className="Comment">
        {/* this.props.comment.name： 等于是Comment class新建了一个标签为comment用来传参数 */}
        <Card title={this.props.comment.name}>
          <p>{this.props.comment.comment}</p>
          {/* 1. LikedButton 传参： 把一个对象 wordings 传给点赞组件作为参数 */}
          {/* <LikeButton wordings={{likedText: '已赞', unlikedText: '赞'}} /> */}

          {/* 2. 如果不给 wordings 传参，则使用默认的参数 */}
          <LikeButton />
        </Card>
        <br />
      </div>
    );
  }
}

export default Comment;
