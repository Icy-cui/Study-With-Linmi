import React, { Component } from "react";
import {
  ContentWapper,
  ContentTitle,
  ContentInfo,
  ContentItem,
} from "../style";
import { connect } from "react-redux";
import { actionCreator } from "../store";

export class Content extends Component {
  render() {
    const { videoContentList, musicContentList } = this.props;
    return (
      <div>
        <ContentWapper>
          <ContentTitle>Stock Video</ContentTitle>
          {videoContentList.map((item) => {
            return (
              <ContentInfo key={item.get("id")}>
                <ContentItem imgUrl={item.get("imgUrl")}>
                  <span className="content-text">
                    {item.get("description")}
                  </span>
                </ContentItem>
              </ContentInfo>
            );
          })}
        </ContentWapper>

        <ContentWapper>
          <ContentTitle>Stock Music</ContentTitle>
          {musicContentList.map((item) => {
            return (
              <ContentInfo key={item.get("id")}>
                <ContentItem imgUrl={item.get("imgUrl")}>
                  <span className="content-text">
                    {item.get("description")}
                  </span>
                </ContentItem>
              </ContentInfo>
            );
          })}
        </ContentWapper>
      </div>
    );
  }

}
const mapState = (state) => ({
    videoContentList: state.getIn(["home", "videoContentList"]),
    musicContentList: state.getIn(["home", "musicContentList"]),
});


export default connect(mapState, null)(Content);
