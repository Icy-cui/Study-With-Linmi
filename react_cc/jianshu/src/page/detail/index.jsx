import React, { Component } from "react";
import { DetailWapper, DetailLeft, DetailRight, Content } from "./style";

import { connect } from "react-redux";
import { actionCreators } from "./store";

export class Detail extends Component {
  render() {
    const { title, content } = this.props;
    return (
      <DetailWapper>
        <DetailLeft>
          <h1 className="header">{title}</h1>
          <Content dangerouslySetInnerHTML={{ __html: content }} />
        </DetailLeft>
        <DetailRight>DetailRight</DetailRight>
      </DetailWapper>
    );
  }

  componentDidMount(){
      this.props.getDetail()
  }
}
const mapState = (state) => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"]),
});

const mapDispatch = (dispatch) =>({
    getDetail(){
        dispatch(actionCreators.getDetail())
    }
})

export default connect(mapState, mapDispatch)(Detail);
