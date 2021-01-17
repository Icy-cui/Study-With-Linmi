import React, { Component } from "react";
import { HomeWapper } from "./style";
import { actionCreator } from "./store";
import { connect } from "react-redux";

import Banner from "./components/Banner";
import Content from "./components/Content";
import Information from "./components/Information";

export class Home extends Component {
  render() {
    return (
      <HomeWapper>
        <Banner />
        <Content />
        <Information />
      </HomeWapper>
    );
  }
  
  componentDidMount() {
    this.props.changeHomeData();
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreator.getList());
  },
});

export default connect(null, mapDispatch)(Home);
