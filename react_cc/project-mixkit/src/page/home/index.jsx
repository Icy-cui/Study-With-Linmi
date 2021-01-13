import React, { Component } from "react";
import { HomeWapper } from "./style";
import Content from "./components/Content";

import Banner from "./components/Banner";

export class Home extends Component {
  render() {
    return (
      <HomeWapper>
        <Banner />
        <Content />
      </HomeWapper>
    );
  }
}

export default Home;
