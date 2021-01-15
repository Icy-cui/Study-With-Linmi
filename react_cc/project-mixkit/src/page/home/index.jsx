import React, { Component } from "react";
import { HomeWapper } from "./style";
import Content from "./components/Content";
import { actionCreator } from "./store";
import Banner from "./components/Banner";
import { connect } from "react-redux";
export class Home extends Component {
  render() {
    return (
      <HomeWapper>
        <Banner />
        <Content />
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
