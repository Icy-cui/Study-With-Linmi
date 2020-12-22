import React, { Component } from "react";
import { Card, Button, Image } from "react-bootstrap";
import imgURL from "./download-2.png";
import playURL from "./play.png";

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
            <Card.Title>Tech House vibes</Card.Title>
            <Card.Text style={{ color: "gray" }}>
              by Alejandro Magaña (A. M.)
            </Card.Text>
            <Image
              className="mr-4"
              src={playURL}
              onClick={this.clickPlay.bind(this)}
            />
            <Image
              src={imgURL}
              onClick={this.clickDownload.bind(this)}
            />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ContentCard;
