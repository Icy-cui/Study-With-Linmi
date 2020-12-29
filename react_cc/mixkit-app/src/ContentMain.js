import React, { Component } from "react";
import ContentCard from "./ContentCard";
import { Container, Row, Col } from "react-bootstrap";

import Waveform from "./WaveForm";
import store from "./store/index";

export class ContentMain extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
  }

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
    let splitMusicGroup = this.checkMusicLen(this.state.musics);

    return (
      <div>
        <Container>
          {splitMusicGroup.map((eachGroup, i) => {
            return (
              <Row key={i}>
                {eachGroup.map((info, i) => {
                  return (
                    <Col>
                      <ContentCard info={info} key={i} />
                    </Col>
                  );
                })}
              </Row>
            );
          })}
          <Waveform style={{ width: "21rem" }} />
        </Container>
      </div>
    );
  }
}

export default ContentMain;
