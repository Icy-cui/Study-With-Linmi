import React, { Component } from "react";
import { Card, Button, Image } from "react-bootstrap";
import audioUrl1 from './test-music1.mp3';

export class ContentCard extends Component {
  clickPlay() {
    console.log(1);
  }
  clickDownload() {
    console.log(2);
  }
  render() {
    return (
      <div style={{ height: "395", width: "230", margin: "20px 0px 0px 0px" }}>
        <Card style={{ width: "21rem" }}>
          <Card.Img
            variant="top"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
          <Card.Body>
            <Card.Title>{this.props.info.name}</Card.Title>
            <Card.Text style={{ color: "gray" }}>
              by {this.props.info.author}
            </Card.Text>
            <audio id="music1" controls='controls' src={this.props.info.audioUrl}/>
            {/* <Card.Link href={audioUrl} className='mr-2'>⏯ Play / Stop</Card.Link> */}
            <Card.Link href='https://assets.mixkit.co/music/download/mixkit-tech-house-vibes-130.mp3'>Download</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ContentCard;
