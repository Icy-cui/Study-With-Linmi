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
    const { focused, list, page, totalPage, mouseIn } = this.props;

    const newList = list.toJS(list);
    const pageList = [];

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={this.props.handleMouseEnter}
          onMouseLeave={this.props.handleMouseLeave}
        >
          <SearchInfoTitle>
            常用标签
            <SearchInfoSwitch
              onClick={() => this.props.handlePageChange(page, totalPage)}
            >
              换一换
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return;
    }
  }

  render() {
    const { focused, list } = this.props;
    return (
      <HeaderWapper>
        <Logo href="/" />
        <Nav>
          <NavItem className="left-navitem active">Home</NavItem>
          <NavItem className="left-navitem">下载 App</NavItem>
          <NavItem className="right-navitem">视频</NavItem>
          <NavItem className="right-navitem">音乐</NavItem>
          <NavItem className="right-navitem">音效</NavItem>

          <SearchWapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => this.props.handleInputFocus(list)}
                onBlur={this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            {this.getListArea()}
          </SearchWapper>
        </Nav>
        <Addition>
          <NavButton className="reg">注册</NavButton>
          <NavButton className="writting">登录</NavButton>
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
    mouseIn: state.getIn(["header", "mouseIn"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
  };
};

// 组件要改变store中的内容要调用 dispatch 方法
const mapDispatchToProps = (dispatch) => {
  // dispatch 就是 store 的 dispatch 方法：传递action到store中去
  return {
    handleInputFocus(list) {
      if (list.size === 0) {
        // get list (related to thunk)
        dispatch(actionCreators.getList());
      }
      // search focus
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      // search blur
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handlePageChange(page, totalPage) {
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
