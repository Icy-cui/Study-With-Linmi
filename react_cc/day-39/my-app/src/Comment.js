// Comments.js -- 只负责每条评论的具体显示
import React, { Component } from "react";
import { Space, Card } from "antd";
// LikeButton block
import LikeButton from "./LikeButton";
import propTypes from "prop-types";

class Comment extends Component {

  delComment(){
    if (this.props.delComment) {
      this.props.delComment(this.props.index)
    }
  }

  componentWillUnmount () {
    clearInterval(this._timer)
  }

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
          <Space direction="horizontal">
          <LikeButton />
          <span onClick={this.delComment.bind(this)} className='comment-delete' style={{color: '#cccccc'}}>
          delete
          </span>
          </Space>
        </Card>
        <br />
      </div>
    );
  }
}

Comment.propTypes = {
  comment: propTypes.object.isRequired,
  delComment: propTypes.func,
  index: propTypes.number
}


export default Comment;
