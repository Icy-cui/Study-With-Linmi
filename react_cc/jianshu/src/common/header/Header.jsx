import React, { Component } from "react";
import { actionCreators } from "./store/index";
//redux
import { connect } from "react-redux";
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
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from "./style";

export class Header extends Component {
  getListArea() {
    const {focused, list} = this.props
    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一换</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {list.map( (item)=>{
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
            })}
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return;
    }
  }

  render() {
    const {focused} = this.props
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
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            {this.getListArea()}
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
const mapStateToProps = (state) => {
  // state 是 store中的所有数据，这样就可以在当前代码中使用 this.props.
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
  };
};

// 组件要改变store中的内容要调用 dispatch 方法
const mapDispatchToProps = (dispatch) => {
  // dispatch 就是 store 的 dispatch 方法：传递action到store中去
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
