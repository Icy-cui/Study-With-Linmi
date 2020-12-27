import React, { Component } from "react";
import WaveSurfer from "wavesurfer.js";
import audioUrl1 from "./test-music1.mp3";

class Waveform extends Component {
  constructor() {
    super();
    this.state = {
      playing: false,
      audioUrl: audioUrl1,
    };
  }

  componentDidMount() {
    this.waveform = WaveSurfer.create({
      barWidth: 2,
      cursorWidth: 1,
      height: 80,
      container: "#waveform",
      normalize: true,
    //   pixelRatio:80,
    //   maxCanvasWidth: 320,
    //   scrollParent: true,
      waveColor: "gray",
      progressColor: "purple",
    });

    this.waveform.load(this.state.audioUrl);
  }

  handlePlay = () => {
    this.setState({ playing: !this.state.playing });
    this.waveform.playPause();
  };

  render() {
    return (
      <div>
        <div id="waveform" />
        <button onClick={this.handlePlay}>
          {!this.state.playing ? "Play" : "Pause"}
        </button>
      </div>
    );
  }
}

export default Waveform;
