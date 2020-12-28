import React, { Component } from "react";
import Comment from "./Comment";
import propTypes from "prop-types";

class CommentList extends Component {

  static propTypes={
    comments: propTypes.array,
    onDeleteComment: propTypes.func
  }

  static defaultProps = {
    comments: [],
  };

  handleDeleteComment (index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }

  render() {
    // const comments = [
    //   { name: "Jerry", content: "Hello" },
    //   { name: "Tomy", content: "World" },
    //   { name: "Lucy", content: "Good" },
    // ]

    // js map function
    console.log(
      this.props.comments.map((c) => {
        return c.comment;
      })
    );
    console.log( this.props.comments);

    return (
      <div>
        {this.props.comments.map((comment, i) => {
          return <Comment comment={comment} key={i} index={i} onDeleteComment={this.handleDeleteComment.bind(this)} />;
        })}
      </div>
    );
  }
}

export default CommentList;
