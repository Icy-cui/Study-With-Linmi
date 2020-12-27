import React, { Component } from "react";
import ContentCard from "./ContentCard";
import { Container, Row, Col } from "react-bootstrap";

import Waveform from './WaveForm'

import audioUrl1 from "./test-music1.mp3";
import audioUrl2 from "./test-music2.mp3";
import audioUrl3 from "./test-music3.mp3";

export class ContentMain extends Component {
  checkMusicLen(data) {
    let result = [];
    let step = 3;
    let len = data.length;
    // console.log(len);
    for (let i = 0; i < len; i += step) {
      result.push(data.slice(i, i + 3));
    }
    return result;
  }

  render() {
    const musics = [
      {
        id: 1,
        name: "Tech House vibes",
        author: "Alejandro Magaña (A. M.)",
        audioUrl: audioUrl1,
        genre: ["House & Electronic"],
        mood: ["Mellow", "Smooth"]
      },
      {
        id: 2,
        name: "Hazy After Hours",
        author: "Alejandro Magaña (A. M.)",
        audioUrl: audioUrl2,
        genre: ["House & Electronic"],
        mood: ["House", "Uplifting"]
      },
      { id: 3, 
        name: "Hip Hop 02", 
        author: "Lily. J", 
        audioUrl: audioUrl3 ,
        genre: ["Experimental"],
        mood: ["Calm", "Smooth"]
      },
      {
        id: 4,
        name: "Tech House vibes",
        author: "Alejandro Magaña (A. M.)",
        audioUrl: audioUrl1,
        genre: ["House & Electronic"],
        mood: ["Mellow", "Smooth"]
      },
      {
        id: 5,
        name: "Hazy After Hours",
        author: "Alejandro Magaña (A. M.)",
        audioUrl: audioUrl2,
        genre: ["House & Electronic"],
        mood: ["House", "Uplifting"]
      },
      { id: 6, 
        name: "Hip Hop 02", 
        author: "Lily. J", 
        audioUrl: audioUrl3 ,
        genre: ["Experimental"],
        mood: ["Calm", "Smooth"]
      },
    ];

    let splitMusicGroup = this.checkMusicLen(musics);

    return (
      <div>
        <Container>
        <Waveform style={{ width: "21rem" }}/>
          {splitMusicGroup.map((eachGroup, i) => {
            return (
              <Row key={i}>
                {eachGroup.map((info, i) => {
                  return (
                    <Col><ContentCard info={info} key={i} /></Col>
                  );
                })}
              </Row>
            );
          })}
        </Container>
      </div>
    );
  }
}

export default ContentMain;
