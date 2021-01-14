import React, { Component } from "react";
import {
  ContentWapper,
  ContentTitle,
  ContentInfo,
  ContentItem,
} from "../style";
import { connect } from "react-redux";

export class Content extends Component {
  render() {
    return (
      <div>
        <ContentWapper>
          <ContentTitle>Stock Video</ContentTitle>
          <ContentInfo>
            <ContentItem><span className='content-text'>nature</span></ContentItem>
            <ContentItem></ContentItem>
            <ContentItem></ContentItem>
            <ContentItem></ContentItem>
          </ContentInfo>
        </ContentWapper>
      </div>
    );
  }
}
const mapState = (state) => ({

})

export default connect(mapState, null)(Content);
