import React, { Component } from "react";
import { HomeWapper, HomeLeft, HomeRight } from "./style";

import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";

export class Home extends Component {
  render() {
    return (
      <HomeWapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="https://momentum.photos/img/51c9b1b2-df0f-4523-bf9d-0603da7c5d0c.jpg?momo_cache_bg_uuid=73fe482d-94b6-44ac-94e2-0d70988a9161"
            alt=""
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWapper>
    );
  }
}

export default Home;
