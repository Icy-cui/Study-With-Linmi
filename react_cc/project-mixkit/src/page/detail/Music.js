import React, { Component } from "react";
import { MusicWapper, MusicHeader, HeaderItem } from "./style.js";

export class Music extends Component {
  render() {
    return (
      <MusicWapper>
        <MusicHeader>
            <HeaderItem>类型  </HeaderItem>
            <HeaderItem>心情  </HeaderItem>
            <HeaderItem>标签  </HeaderItem>
        </MusicHeader>
      </MusicWapper>
    );
  }
}

export default Music;
