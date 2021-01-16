import React, { Component } from "react";
import {
  ContentWapper,
  ContentTitle,
  ContentInfo,
  ContentItem,
} from "../style";
import { connect } from "react-redux";
// 动画效果库
import { CSSTransition } from "react-transition-group";

export class Content extends Component {
  render() {
    const { videoContentList, musicContentList, soundEffectList } = this.props;
    return (
      <div>
        <ContentWapper>
          <ContentTitle>
            <a className="content-title" href="/detail/components/Video">
              Stock Video
            </a>
          </ContentTitle>
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
          <ContentTitle>
            <a className="content-title" href="/detail/components/Video">
              Stock Music
            </a>
          </ContentTitle>
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

        <ContentWapper>
          <ContentTitle>
            <a className="content-title" href="/detail/components/Video">
              Sound Effects
            </a>
          </ContentTitle>
          {soundEffectList.map((item) => {
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
  soundEffectList: state.getIn(["home", "soundEffectList"]),
});

export default connect(mapState, null)(Content);
