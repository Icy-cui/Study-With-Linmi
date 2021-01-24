import React, { Component } from "react";
import { MusicWapper, MusicHeader, MusicBanner } from "./style.js";

export class Music extends Component {
  render() {
    return (
      <MusicWapper>
        <MusicHeader>
          <a href="/">类型</a>
          <a href="/">类型</a>
          <a href="/">类型</a>
          <MusicBanner />
        </MusicHeader>
      </MusicWapper>
    );
  }
}

export default Music;
