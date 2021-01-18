import React, { Component } from "react";
import { FooterWapper, FooterItemList } from "../style";
import { connect } from "react-redux";

export class Footer extends Component {
  render() {
    return (
      <FooterWapper>
        <FooterItemList>
          <h4 className="item-title">Video</h4>
          {this.props.videoFooterList.map((item) => {
            return (
              <a href="/" className="item">
                {item.get("title")}
              </a>
            );
          })}
        </FooterItemList>
        <FooterItemList>
          <h4 className="item-title">Video</h4>
          {this.props.videoFooterList.map((item) => {
            return (
              <a href="/" className="item">
                {item.get("title")}
              </a>
            );
          })}
        </FooterItemList>
        <FooterItemList>
          <h4 className="item-title">Video</h4>
          {this.props.videoFooterList.map((item) => {
            return (
              <a href="/" className="item">
                {item.get("title")}
              </a>
            );
          })}
        </FooterItemList>
        <FooterItemList>
          <h4 className="item-title">Video</h4>
          {this.props.videoFooterList.map((item) => {
            return (
              <a href="/" className="item">
                {item.get("title")}
              </a>
            );
          })}
        </FooterItemList>
        <FooterItemList>
          <h4 className="item-title">Video</h4>
          {this.props.videoFooterList.map((item) => {
            return (
              <a href="/" className="item">
                {item.get("title")}
              </a>
            );
          })}
        </FooterItemList>
        <FooterItemList>
          <h4 className="item-title">Video</h4>
          {this.props.videoFooterList.map((item) => {
            return (
              <a href="/" className="item">
                {item.get("title")}
              </a>
            );
          })}
        </FooterItemList>
        <FooterItemList>
          <h4 className="item-title">Video</h4>
          {this.props.videoFooterList.map((item) => {
            return (
              <a href="/" className="item">
                {item.get("title")}
              </a>
            );
          })}
        </FooterItemList>
        <FooterItemList>
          <h4 className="item-title">Video</h4>
          {this.props.videoFooterList.map((item) => {
            return (
              <a href="/" className="item">
                {item.get("title")}
              </a>
            );
          })}
        </FooterItemList>
      </FooterWapper>
    );
  }
}

const mapState = (state) => ({
  videoFooterList: state.getIn(["home", "videoFooterList"]),
});

export default connect(mapState, null)(Footer);
