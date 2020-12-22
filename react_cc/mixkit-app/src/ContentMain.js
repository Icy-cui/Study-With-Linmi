import React, { Component } from "react";
import ContentCard from "./ContentCard";
import { Container, Row, Col } from "react-bootstrap";

export class ContentMain extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col><ContentCard /></Col>
            <Col><ContentCard /></Col>
            <Col><ContentCard /></Col>
          </Row>
          <Row>
            <Col><ContentCard /></Col>
            <Col><ContentCard /></Col>
            <Col><ContentCard /></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ContentMain;
