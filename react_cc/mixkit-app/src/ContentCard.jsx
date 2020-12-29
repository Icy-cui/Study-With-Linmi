import React, { Component } from "react";
import { Card, Badge, Dropdown } from "react-bootstrap";
import Waveform from './WaveForm'

export class ContentCard extends Component {
  clickPlay() {
    console.log(1);
  }
  clickDownload() {
    console.log(2);
  }
  render() {
    let info = this.props.info;

    return (
      <div style={{ height: "395", width: "230", margin: "20px 0px 0px 0px" }}>
        <Card style={{ width: "21rem" }}>
          <Card.Body>
            <Card.Title>{info.name}</Card.Title>
            <Card.Text style={{ color: "gray" }}>by {info.author}</Card.Text>
            <audio id="music1" controls="controls" src={info.audioUrl} />
            {/* <Card.Link href={audioUrl} className='mr-2'>⏯ Play / Stop</Card.Link> */}
            <Card.Link href="https://assets.mixkit.co/music/download/mixkit-tech-house-vibes-130.mp3">
              Download
            </Card.Link>
            <Dropdown.Divider />
            {info.genre.map((each, i) => {
              return (
                <Badge pill variant="light" key={i} onClick={this.clickPlay}>
                  {each}
                </Badge>
              );
            })}
            {info.mood.map((each, i) => {
              return (
                <Badge
                  pill
                  variant="light"
                  key={i}
                  onClick={this.clickDownload}
                >
                  {each}
                </Badge>
              );
            })}
          </Card.Body>
        </Card>
        <script src="https://unpkg.com/wavesurfer.js"></script>
      </div>
    );
  }
}

export default ContentCard;
