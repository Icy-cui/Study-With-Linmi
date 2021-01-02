import React, { Component } from "react";
//redux
import {connect} from 'react-redux';
// 动画效果库
import { CSSTransition } from "react-transition-group";
import {
  HeaderWapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  NavButton,
  Addition,
  SearchWapper,
} from "./style";

import  {actionCreators} from './store/index';

export class Header extends Component {
  render() {
    return (
      <HeaderWapper>
        <Logo href="/" />
        <Nav>
          <NavItem className="left-navitem active">Home</NavItem>
          <NavItem className="left-navitem">下载App</NavItem>
          <NavItem className="right-navitem">登录</NavItem>
          <NavItem className="right-navitem">Aa</NavItem>

          <SearchWapper>
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? "focused" : ""}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
          </SearchWapper>
        </Nav>
        <Addition>
          <NavButton className="reg">注册</NavButton>
          <NavButton className="writting">写文章</NavButton>
        </Addition>
      </HeaderWapper>
    );
  }
}

// 组件和store做连接时，state 如何映射到 props
const mapStateToProps=(state)=>{
    // state 是 store中的所有数据，这样就可以在当前代码中使用 this.props.
    return {
        focused: state.header.focused
    };

}

// 组件要改变store中的内容要调用 dispatch 方法
const mapDispatchToProps=(dispatch)=>{
    // dispatch 就是 store 的 dispatch 方法：传递action到store中去
    return {
        handleInputFocus(){
            const action = actionCreators.searchFocus();
            dispatch(action)
        },
        handleInputBlur(){
            const action = actionCreators.searchBlur();
            dispatch(action)
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
