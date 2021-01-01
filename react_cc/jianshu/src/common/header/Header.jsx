import React, { Component } from "react";
import {
  HeaderWapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  NavButton,
  Addition,
} from "./style";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        focused:true
    }
  }

  render() {
    return (
      <HeaderWapper>
        <Logo href="/" />
        <Nav>
          <NavItem className="left-navitem active">Home</NavItem>
          <NavItem className="left-navitem">下载App</NavItem>
          <NavItem className="right-navitem">登录</NavItem>
          <NavItem className="right-navitem">Aa</NavItem>
          <NavSearch></NavSearch>
        </Nav>
        <Addition>
          <NavButton className="reg">注册</NavButton>
          <NavButton className="writting">写文章</NavButton>
        </Addition>
      </HeaderWapper>
    );
  }
}

export default Header;
