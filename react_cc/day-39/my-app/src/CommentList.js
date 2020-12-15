import React, { Component } from "react";
import Comment from "./Comment";

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }
  render() {
    // const comments = [
    //   { name: "Jerry", content: "Hello" },
    //   { name: "Tomy", content: "World" },
    //   { name: "Lucy", content: "Good" },
    // ];

    // js map function
    console.log(
        this.props.comments.map((c) => {
        return (c.name, c.content);
      })
    );

    return (
      <div>
        {this.props.comments.map((comment, i) => {
          return <Comment comment={comment} key={i} />;
        })}
      </div>
    );
  }
}

export default CommentList;
