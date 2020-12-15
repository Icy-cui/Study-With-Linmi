import React, { Component } from "react";
import { Input, Button } from "antd";
import { UserOutlined } from '@ant-design/icons';
const { TextArea } = Input;


class CommentInput extends Component {
  constructor() {
    super();
    // 会产生改变的两个属性
    this.state = { name: "", comment: "" };
  }

  // 使用 onChange 监听改变
  nameChange(e) {
      // value 是 render return 中 input 的标签 -- value
    // console.log(e.target.value);
    this.setState({ name: e.target.value });
  }

  commentChange(e) {
    // console.log(e.target.value);
    this.setState({ comment: e.target.value });
  }

  submitContent(){
    if(this.props.onSubmit){
        const {name, comment} = this.state
        this.props.onSubmit({name, comment})
    }
    //else: set content to empty
    this.setState({ comment: '' })
  }

  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <div className="comment-field-input">
            <Input
              type="text"
              value={this.state.name}
              onChange={this.nameChange.bind(this)}
              prefix={<UserOutlined />} 
              placeholder="name"
            />
          </div>
        </div>
        <br />
        <div className="comment-field">
          <div className="comment-field-input">
            <TextArea
              rows={4}
              value={this.state.comment}
              onChange={this.commentChange.bind(this)}
              placeholder="your comment..."
            />
          </div>
        </div>
        <br />
        <div className="comment-field-button">
          <Button type="primary" onClick={this.submitContent.bind(this)}>send</Button>
        </div>
        <br />
      </div>
    );
  }
}
export default CommentInput;
