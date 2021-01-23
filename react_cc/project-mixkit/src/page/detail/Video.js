import React, { Component } from "react";
import { VideoWapper, VideoHeader } from "./style.js";

export class Video extends Component {
  render() {
    return (
      <VideoWapper>
        <VideoHeader></VideoHeader>
      </VideoWapper>
    );
  }
}

export default Video;
